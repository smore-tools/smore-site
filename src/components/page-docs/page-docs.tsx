import { Component, Prop, State, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
    tag: 'page-docs',
    styleUrl: 'page-docs.css'
})
export class Docs {

    @State() menuOpen = false;
    @Prop() match: MatchResults;

    @Listen('click')
    protected clickHandler(e: MouseEvent) {
        if ((e.target as HTMLElement).id === 'menu-button') return;
        if (this.menuOpen) this.menuOpen = false;
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
                        <nav>
                            <ul>
                                <li>Introduction</li>
                                <li>Installation</li>
                            </ul>
                        </nav>
                    </aside>
                    <article>
                        <button id="menu-button" onClick={() => this.menuOpen = true}>Menu</button>
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
