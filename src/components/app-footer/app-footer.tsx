import { Component } from '@stencil/core';
import { Heart } from './icons';


@Component({
    tag: 'app-footer',
    styleUrl: 'app-footer.css',
    shadow: true
})
export class Footer {

    render() {
        return (
            <footer>
                <div class="container">
                    <p>Built with <Heart /> by <a href="https://twitter.com/n_moore">Nate Moore</a></p>
                    <p class="license"><a href="https://github.com/smore-tools/smore-site">Source</a> <span class="separator">/</span> Released under MIT License <span class="separator">/</span> © 2018</p>
                </div>
            </footer>
        );
    }
}
