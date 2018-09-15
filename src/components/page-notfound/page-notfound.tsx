import { Component } from '@stencil/core';


@Component({
    tag: 'page-notfound',
    styleUrl: 'page-notfound.css'
})
export class PageNotfound {

    render() {
        return (
            <div class="page notfound">
                <h1>Oops!</h1>
                <h3>We couldn't find the page you were looking for...</h3>
                <p>
                    <stencil-route-link url='/'>
                        Head home!
                    </stencil-route-link>
                </p>
            </div>
        );
    }

}
