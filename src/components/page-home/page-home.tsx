import { Component, Element, State, Listen } from '@stencil/core';


@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css'
})
export class Home {

  private prompt = `npm install @smore/core`;

  @Element() el: HTMLElement;

  @State() isAnimating = false;
  @State() showCopiedConfirm: number;
  @State() x = 0;
  @State() y = 0;

  @Listen('window:deviceorientation')
  protected handleDeviceOrientation(event: DeviceOrientationEvent) {
    const { gamma, beta } = event;
    let x = gamma / -90;
    let y = beta / -180;
    if (x > 1) { x = 1 }
    if (x < -1) { x = -1 }

    if (y > 1) { y = 1 }
    if (y < -1) { y = -1 }
    this.x = x;
    this.y = y;

    console.log({ beta, gamma });
  }


  @Listen('keydown.enter')
  @Listen('keydown.space')
  protected keydownHandler(event: KeyboardEvent) {
    if ((event.target as HTMLElement).id === 'prompt-highlight') {
      this.handlePromptClick();

      if (event.key === " ") {
        event.preventDefault();
      }
    }
  }

  private handleMouseLeave() {
    this.x = 0;
    this.y = 0;
  }

  private handleMouseMove(ev: MouseEvent) {
    const { width, height } = (ev.target as HTMLElement).getBoundingClientRect();
    const { offsetX, offsetY } = ev;
    this.x = (0.5 - offsetX / width) * -1;
    this.y = (0.5 - offsetY / height) * -1;
  }

  private handlePromptClick() {
      const codeElParent = this.el.querySelector('.prompt');
      const el = document.createElement('textarea');

      el.value = this.prompt;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      if (this.showCopiedConfirm) {
        window.clearTimeout(this.showCopiedConfirm);
        this.showCopiedConfirm = 0;
      }
      codeElParent.classList.add('copied');
      this.showCopiedConfirm = window.setTimeout(() => {
        codeElParent.classList.remove('copied');
        this.showCopiedConfirm = 0;
      }, 1500);
  }

  hostData() {
    return {
      class: {
        animating: this.x !== 0 && this.y !== 0
      },
      style: {
        '--x': this.x,
        '--y': this.y
      }
    }
  }

  render() {
    return (
      <article class="app-home">
        
        <section class="hero"
          onMouseMove={(e) => this.handleMouseMove(e)}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <img class="forest" src="/assets/images/hero.svg" alt="forest"/>
          <div>
              <img class="logo" src="/assets/logo/logo-color.svg" alt="S'more Logo" />
              <h3 class="pretagline">Modern, modular web component library chock-full of</h3>
              <h2 class="tagline">Gooey GUI Goodness</h2>
          </div>
        </section>

        <section class="cta">
            <div class="prompt">
              <div class="dots"> <span/> <span/> <span/> </div>
              <span class="symbol">❯ </span>
              <div class="text">
                <span class="highlight" id="prompt-highlight" tabIndex={0} onClick={() => this.handlePromptClick()}>{this.prompt}</span>
                <span class="copy-confirm">Copied!</span>
              </div>
            </div>
        </section>

        <section class="benefits">
          <div class="container">
            <smore-observer mode="in">
              <h3>🌚 Unique</h3>
              <p>You won't find yet another set of buttons and nav menus here, but you will find a unique range of handy micro-interactions.</p>
            </smore-observer>
            <smore-observer mode="in">
              <h3>🧐 Unopinionated</h3>
              <p>Style your app, your way. You won't have to wrestle with any S'more-specific styling.</p>
            </smore-observer>
            <smore-observer mode="in">
              <h3>📦 Modular</h3>
              <p>Install only what you need, when you need it. Each component is its own module.</p>
            </smore-observer>
            <smore-observer mode="in">
              <h3>🆕 Modern</h3>
              <p>Built on modern web-standards, supported in all your favorite browsers.</p>
            </smore-observer>
            <smore-observer mode="in">
              <h3>💎 Flexible</h3>
              <p>Built with <a href="https://stenciljs.com">Stencil</a>, S'more components can be used with any framework (or no framework at all!)</p>
            </smore-observer>
            <smore-observer mode="in">
              <h3>🎉 Fun</h3>
              <p>With an emphasis on <em>surprise and delight</em>, S'more is as fun for developers as it is for end-users!</p>
            </smore-observer>
          </div>
        </section>

        <section class="next-steps">
          <h2>What now? </h2>
          <p>Explore our documentation or take a look at S'more in action!</p>

          <div class="buttons">
            <stencil-route-link url='/docs/introduction'>
              <button> Read the Docs </button>
            </stencil-route-link>
            <stencil-route-link url='/demos'>
              <button> See some Demos </button>
            </stencil-route-link>
          </div>

        </section>

        <section class="hidden">
          <stencil-route-link url='/404'>404</stencil-route-link>
        </section>

      </article>
    );
  }
}
