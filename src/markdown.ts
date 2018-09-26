import marked from 'marked';
import hljs from 'highlight.js';

export interface HeadingStruc {
    text: string;
    level: number;
    anchorId: string;
}

export interface MarkedStruc {
    headings: HeadingStruc[];
    body: string;
}

export const toCodeBlock = (code: string, lang = '') => {
    const { value } = hljs.highlightAuto(code, [lang]);
    return `<site-codeblock language="${lang}">${value}</site-codeblock>`;
}

const getSlot = (lang: string) => {
    switch (lang) {
        case 'html': return 'markup';
        case 'css': return 'styles';
        default: return 'scripts';
    }
}

const toPreviewBlock = (blocks: { lang: string, code: string }[]) => {
    const content = blocks.map(({ lang, code }) => {
        return `<site-codeblock slot="${getSlot(lang)}" language="${lang}">${hljs.highlightAuto(code, [lang]).value}</site-codeblock>`
    }).join('\n');
    const attrs = blocks.map(({ lang, code }) => `${getSlot(lang)}="${escape(code)}"`).join(' ');
    const preview = `<site-preview slot="preview" ${attrs}></site-preview>`
    
    return `
        <site-tabgroup>
            ${content}
            ${preview}
        </site-tabgroup>
    `;
}

const generateHeadingID = (inText: string) => {
    let text = inText;
    text = text.toLowerCase()
        .replace(/&#?[a-z0-9]+;/i, '')
        .replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
        .replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '')
        .replace(/ +/g, '-');
    return text;
};

// interface RenderOptions {
//     disableHtmlPreviews?: boolean;
//     initialTab?: string;
//     inlineHtmlPreviews?: boolean;
// }

export function renderMarkdown(markdown: string): MarkedStruc {
    const renderer = new marked.Renderer();
    const headings: HeadingStruc[] = [];

    // HRs wrap tabgroups, which are multiple code blocks
    let tabgroup = -1;
    let codeblocks = [];
    renderer.hr = () => {
        if (tabgroup === 0) {
            tabgroup = -1;
            let result = toPreviewBlock(codeblocks);
            codeblocks = [];
            return result;
        }
        tabgroup++;
        return '';
    }

    // We don't actually render a codeblock here if it's inside an HR wrap (tabgroup)
    renderer.code = (code: string, lang: string) => {
        if (tabgroup === 0) {
            codeblocks.push({ lang, code });
            return '';
        }

        // Standalone, so go ahead (no preview)
        return toCodeBlock(code, lang);
    };

//     renderer.image = (href = '', title) => `
//     <img-zoom>
//       <img src="${href}" ${title && `title="${title}"`} />
//     </img-zoom>
//   `;

    renderer.heading = (text: string, level: number) => {
        const hasNestedTags = /<.+>(.+)<\/.+>/.test(text);

        if (level > 3 || hasNestedTags) {
            return `<h${level}>${text}</h${level}>`;
        }

        const anchorId = generateHeadingID(text);
        headings.push({ text, level, anchorId });

        return `
      <h${level} id="${anchorId}">
        <a href="#${anchorId}" class="linked">${text}</a>
      </h${level}>
    `;
    };

    renderer.codespan = code => {
        // quick out if not an ionic component or menu is empty
        // if (code.indexOf('ion-') !== -1) {
        //     // link to ionic component if possible
        //     // const converted = code.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
        //     //     .toLowerCase()
        //     //     .replace('ion-', '');
        //     // if (components[converted]) {
        //     //     code = `<a href="${components[converted]}" class="auto-link">${code}</a>`;
        //     // }
        // }

        return `<code>${code}</code>`;
    };

    renderer.table = (thead: string, tbody: string) =>
        `<div class="table-wrap">
      <table>
        <thead>
          ${thead}
        </thead>
        <tbody>
          ${tbody}
        </tbody>
      </table>
    </div>`;

    return {
        headings,
        body: marked(markdown, { renderer })
    };
}