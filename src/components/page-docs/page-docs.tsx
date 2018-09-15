import { Component, Prop, State, Listen } from '@stencil/core';
import { Menu, Close } from './icons';
import { MatchResults } from '@stencil/router';

interface MenuItem {
    title: string;
    url: string;
}

@Component({
    tag: 'page-docs',
    styleUrls: ['page-docs.css', 'menu.css']
})
export class Docs {

    private menu: { title: string, items: MenuItem[] }[] = [
        {
            title: 'Getting Started',
            items: [
                { title: 'Introduction', url: 'introduction' },
                { title: 'Installation', url: 'installation' }
            ]
        }, {
            title: 'Components',
            items: [
                { title: 'Overview', url: 'components' },
                { title: 'Async Content', url: 'async-content' },
                { title: 'Counter', url: 'counter' }
            ]
        }
    ]

    @State() menuOpen = false;
    @Prop() match: MatchResults;

    @Listen('click')
    protected clickHandler(e: MouseEvent) {
        if ((e.target as HTMLElement).id === 'menu-button') return;
        if (this.menuOpen) this.menuOpen = false;
    }

    private toggleMenu(e: Event) {
        this.menuOpen = !this.menuOpen;
        e.stopPropagation();
    }

    private renderSubmenu({ title, items }: { title: string, items: MenuItem[] }) {
        return (
            <li class="submenu">
                <h4>{ title }</h4>
                <ul>
                    {
                        items.map(item => (
                            <li>
                                <stencil-route-link url={`/docs/${item.url}`}> {item.title} </stencil-route-link>
                            </li>
                        ))
                    }
                </ul>
            </li>
        )
    }

    private renderMenu() {
        return (
            <nav>
                <ul class="menu">
                    {this.menu.map(submenu => this.renderSubmenu(submenu))}
                </ul>
            </nav>
        )
    }

    hostData() {
        return {
            class: {
                'menu-is-open': this.menuOpen
            }
        }
    }

    render() {
        if (this.match && this.match.params.name) {
            return (
                <div class="page docs">
                    <aside>
                        {this.renderMenu()}
                    </aside>
                    <article>
                        <button id="menu-button" class="icon-button" onClick={(e) => this.toggleMenu(e)}>
                            { !this.menuOpen ? <Menu /> : <Close /> }
                        </button>
                        <h1> {this.match.params.name}</h1>
                        <p>
                            Hello! My name is {this.match.params.name}.
                        </p>
                    </article>
                </div>
            );
        }
    }
}
