import { Component, Prop, Watch, State } from '@stencil/core';
import frontmatter from 'frontmatter';
import { renderMarkdown } from '../../markdown';


@Component({
    tag: 'site-document',
    styleUrl: 'document.css'
})
export class Document {

    @State() title: string;
    @State() content: string;

    @Prop({ context: 'document' }) document: Document;
    @Prop({ context: 'server' }) isServer: boolean;
    
    @Prop() path: string;

    @Watch('path')
    fetchNewContent(newDoc: string) {
        if (newDoc == null) { return; }
        
        return fetch(`/content/${newDoc}.md`)
            .then(res => res.text())
            .then(this.initialize)
            .then(this.parseFrontmatter)
            .then(({ attributes, body }) => this.handleNewContent({ attributes, body }))
    }

    private initialize(body: string): { attributes: { [k: string]: any }, body: string } {
        const attributes = {
            title: ''
        }

        return { attributes, body }
    }

    private parseFrontmatter({ attributes, body }) {
        const { data, content } = frontmatter(body);
        if (!data) return { attributes, body };
        
        attributes = {
            ...attributes,
            title: data.title,
            description: data.description
        }
        return { attributes, body: content }
    }

    private handleNewContent({ attributes, body: content }) {
        const { body } = renderMarkdown(content);

        if (body !== null) {
            this.document.title = `S'more | ${attributes.title}`;
            this.title = attributes.title;
            this.content = body;
        }
    }

    componentDidLoad() {
        this.fetchNewContent(this.path);
    }


    render() {
        return [
            <h1>{this.title}</h1>,
            <div innerHTML={this.content} />
        ];

        // return [
            // this.renderPreviewLink(),
            // <div class="table-of-contents">
            //     {(headings.length > 0) && !this.hideTOC ? [
            //         <strong class="toc-label">Contents</strong>,
            //         <ul class="toc-list">
            //             {headings.map(heading => {
            //                 return (
            //                     <li class="toc-item">
            //                         <a href={`#${heading.anchorId}`} innerHTML={heading.text}></a>
            //                     </li>
            //                 );
            //             })}
            //         </ul>
            //     ] : null}
            // </div>,
            // !this.frontMatter.hideFooter && <docs-footer frontmatter={this.frontMatter} path={this.path} />
        // ];
    }
}
