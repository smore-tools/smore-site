import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return [
        <app-header />,
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='page-home' exact={true} />
              <stencil-route url='/docs/:name' component='page-docs' />
              <stencil-route url='/docs' routeRender={() => <stencil-router-redirect url='/docs/introduction'/>} />
              <stencil-route url='/demos' component='page-demos' />
              
              <stencil-route component='page-notfound'></stencil-route>
            </stencil-route-switch>
          </stencil-router>
          {/*  */}
        </main>,
        <app-footer />
    ];
  }
}
