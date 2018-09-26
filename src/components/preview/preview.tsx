import { Component, Prop, Method, Element, State } from '@stencil/core';
import { Refresh } from './icons';


@Component({
    tag: 'site-preview',
    styleUrl: 'preview.css',
    shadow: true
})
export class Preview {
    private id = `preview-${previewIds++}`
    @State() animating = false;
    @State() height = 56;
    @Element() el: HTMLElement;
    private frame: HTMLIFrameElement;
    @Prop() markup: string = '';
    @Prop() styles: string = '';
    @Prop() scripts: string = '';

    componentDidLoad() {
        this.frame = (this.el.shadowRoot || this.el).querySelector('iframe');
        window.addEventListener('message', ({ data }: { data: [string, number] }) => {
            const id = data[0];
            const value = data[1];
            if (id === `height-${this.id}`) {
                if (value < 256) {
                    this.height = value;
                } else {
                    this.height = 256;
                }
            }
        })
    }

    @Method() refresh() {
        this.animating = true;
        setTimeout(() => {
            this.animating = false;
        }, 600);
        this.frame.src += '';
    }

    hostData() {
        return {
            class: {
                'is-animating': this.animating
            },
            style: {
                '--height': this.height
            }
        }
    }

    render() {
        const styleDefault = `
            <style>
                body {
                    box-sizing: border-box;
                    padding: 12px;
                    min-height: 56px;
                    height: 100%;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    line-height: 1.5;
                    
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    flex-flow: column nowrap;
                    color: rgba(0,0,0,0.87);
                }
            </style>
        `;
        const scriptSmore = `<script src="https://unpkg.com/@smore/core/dist/smore.js"></script>`;
        const scriptHeight = `
            <script>
                document.addEventListener('DOMContentLoaded', () => {
                    window.parent.postMessage(['height-${this.id}', document.body.offsetHeight], '*');
                })
            </script>
        `;
        const body = this.markup ? `<body>${unescape(this.markup)}</body>` : '';
        const styles = this.styles ? `<style>${unescape(this.styles)}</style>` : '';
        const scripts = this.scripts ? `<script>${unescape(this.scripts)}</script>` : '';
        
        return [
            <iframe src={
                `data:text/html,${encodeURIComponent(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        ${scriptSmore}
                        ${scriptHeight}
                        ${styleDefault}
                        ${styles}
                    </head>
                        ${body}
                        ${scripts}
                    </html>
                `)}`
            }/>,
            <div class="overlay"> <button onClick={() => this.refresh()}><Refresh/></button> </div>
        ];
    }
}

let previewIds = 0;