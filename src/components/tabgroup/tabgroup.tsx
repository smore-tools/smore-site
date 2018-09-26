import { Component } from '@stencil/core';


@Component({
    tag: 'site-tabgroup',
    styleUrl: 'tabgroup.css',
    shadow: true
})
export class Tabgroup {
    render() {
        return [
            <div class="content">
                <slot name='markup' />
                <slot name='styles' />
                <slot name='scripts' />
            </div>,
            <slot name="preview" />
        ];
    }
}
