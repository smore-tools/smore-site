import { Component, Listen } from '@stencil/core';
import { DocsMap } from '../../content';
import '@smore/core';

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
              <stencil-route url='/docs' exact={true} routeRender={() => <stencil-router-redirect url='/docs/introduction' />} />
              <stencil-route url='/docs/' exact={true} routeRender={() => <stencil-router-redirect url='/docs/introduction' />} />
              <stencil-route
                url="/docs/:name"
                routeRender={(props: { [key: string]: any }) => {
                  if (DocsMap[props.match.params.name]) {
                    return (
                      <page-docs>
                        <site-document path={DocsMap[props.match.params.name]}/>
                      </page-docs>
                    );
                  } else {
                    return (
                      <stencil-router-redirect url='404' />
                    )
                  }
                }}
              />
              <stencil-route url='/demos' component='page-demos' />
              
              <stencil-route component='page-notfound'></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>,
        <app-footer />
    ];
  }
}
