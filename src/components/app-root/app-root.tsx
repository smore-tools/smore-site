import { Component, Listen } from '@stencil/core';
import { TrailMap } from '@smore/trailmap';
import { DocPaths } from '../../content';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  setScrollPosition() {
    const { hash } = window.location;
    const target = hash ? document.querySelector(hash) as HTMLElement : null;
    if (target) {
      target.scrollIntoView();
    }
  }

  componentDidLoad() {
    setTimeout(() => this.setScrollPosition(), 100);
  }

  @Listen('window:hashchange')
  protected onhashchangeHandler(event) {
    event.preventDefault();
    this.setScrollPosition();
  }


  render() {
    return [
        <app-header />,
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='page-home' exact={true} />

              <stencil-route url='/testA' routeRender={() => <stencil-router-redirect url='/testB' />} />
              <TrailMap base='/docs' paths={DocPaths} component='page-docs' />
              <stencil-route url='/demos' component='page-demos' />
              
              <stencil-route component='page-notfound' />
            </stencil-route-switch>
          </stencil-router>
        </main>,
        <app-footer />
    ];
  }
}
