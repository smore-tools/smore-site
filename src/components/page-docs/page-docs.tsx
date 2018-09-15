import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
    tag: 'page-docs',
    styleUrl: 'page-docs.css'
})
export class Docs {

    @Prop() match: MatchResults;

    render() {
        if (this.match && this.match.params.name) {
            return (
                <div class="page docs">
                    <p>
                        Hello! My name is {this.match.params.name}.
                        My name was passed in through a route param!
                    </p>
                </div>
            );
        }
    }
}
