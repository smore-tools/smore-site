import { Component } from '@stencil/core';


@Component({
    tag: 'page-demos',
    styleUrl: 'page-demos.css'
})
export class Demos {

    render() {
        return (
            <div class="demos">
                <p>
                    Hello! My name is demos!
                </p>
            </div>
        );
    }
}
