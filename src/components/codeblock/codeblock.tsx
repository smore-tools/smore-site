import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'site-codeblock',
    styleUrls: ['codeblock.css', 'theme.css'],
    shadow: true
})
export class Codeblock {

    @Prop({ reflectToAttr: true }) language: string;

    hostData() {
        return {
            class: {
                [`language-${this.language}`]: this.language
            }
        }
    }

    render() {
        const Label = () => this.language ? <div class="label">{this.language}</div> : null;
        const Prefix = () => this.language === 'shell' ? <span class="prompt">❯ </span> : null;
        return [
            <Label/>,
            <div class="scroll"><pre><code><Prefix/><slot/></code></pre></div>
        ];
    }
}
