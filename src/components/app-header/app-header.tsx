import { Component, State } from '@stencil/core';
import { External } from './icons';

interface MenuItem {
    title: string;
    url: string;
    isExternal?: true;
}

@Component({
    tag: 'app-header',
    styleUrl: 'app-header.css',
    shadow: true
})
export class Header {

    private menu: MenuItem[] = [
        { title: 'Docs', url: '/docs/introduction' },
        { title: 'Demos', url: '/demos' },
        { title: 'GitHub', url: 'https://github.com/smore-tools/smore', isExternal: true }
    ]

    @State() pinned = false;

    renderMenuItem({ title, url, isExternal }: MenuItem) {
        if (!isExternal) {
            return (
                <li>
                    <stencil-route-link url={url}>
                        {title}
                        {isExternal ? <p>Out</p> : null}
                    </stencil-route-link>
                </li>
            );
        } else {
            return (
                <li class="external">
                    <a href={url}> <span>{title}</span> <External/> </a>
                </li>
            );
        }
    }

    hostData() {
        return {
            class: {
                'is-pinned': this.pinned
            }
        }
    }

    render() {
        return (
            <header class="fixed">
                <div class="container">
                    <stencil-route-link class="logo-link" url="/">
                        <img class="logo" src="/assets/logo/logo-black.svg" alt="icon" />
                        <img class="wordmark" src="/assets/logo/wordmark.svg" alt="s'more" />
                    </stencil-route-link>
                    <nav>
                        <ul>
                            {this.menu.map(item => this.renderMenuItem(item))}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
