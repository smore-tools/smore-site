import { Component, Prop, State, Listen } from '@stencil/core';
import { Menu, Close } from './icons';
import { MatchResults } from '@stencil/router';


@Component({
    tag: 'page-docs',
    styleUrls: ['page-docs.css', 'menu.css']
})
export class Docs {

    @State() menuOpen = false;
    @Prop() match: MatchResults;

    private toggleMenu(e: Event) {
        this.menuOpen = !this.menuOpen;
        e.stopPropagation();
    }

    @Listen('click')
    protected clickHandler(e: MouseEvent) {
        if ((e.target as HTMLElement).id === 'menu-button') return;
        if (this.menuOpen) this.menuOpen = false;
    }

    private renderSubmenu(title: string, items: string[]) {
        return (
            <li class="submenu">
                <h4>{ title }</h4>
                <ul>
                    {
                        items.map(item => (
                            <li>
                                <stencil-route-link url={`/docs/${item.toLowerCase()}`}> {item} </stencil-route-link>
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
                    {this.renderSubmenu('Getting Started', ['Introduction', 'Installation'])}
                    {this.renderSubmenu('Components', ['Async Content', 'Counter'])}
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
