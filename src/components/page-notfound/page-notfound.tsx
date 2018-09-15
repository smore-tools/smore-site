import { Component } from '@stencil/core';


@Component({
    tag: 'page-notfound',
    styleUrl: 'page-notfound.css'
})
export class PageNotfound {

    render() {
        return (
            <div class="page notfound">
                
                <img src="/assets/images/notfound.svg" alt="campfire"/>
                <h2>We couldn't find the page you were looking for...</h2>
                <stencil-route-link url='/'>
                    <button>Head back to camp</button>
                </stencil-route-link>
            </div>
        );
    }

}
