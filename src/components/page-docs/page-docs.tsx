import { Component, State, Listen, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { DocsMenu } from '../../content';
import { Menu, Close } from './icons';

interface MenuItem {
    title: string;
    url: string;
}

@Component({
    tag: 'page-docs',
    styleUrls: ['page-docs.css', 'menu.css'],
})
export class Docs {

    private menu = DocsMenu;
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
        return (
            <div class="page docs">
                <aside>
                    {this.renderMenu()}
                </aside>
                <article>
                    <button id="menu-button" class="icon-button" onClick={(e) => this.toggleMenu(e)}>
                        { !this.menuOpen ? <Menu /> : <Close /> }
                    </button>

                    <site-document path={this.match.params.path}></site-document>
                    
                </article>
            </div>
        );
    }
}
