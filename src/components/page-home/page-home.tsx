import { Component, Element, State } from '@stencil/core';


@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css'
})
export class Home {

  private prompt = `npm install @smore/core`;

  @Element() el: HTMLElement;

  @State() showCopiedConfirm: number;

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

  render() {
    return (
      <article class="app-home">
        
        <section class="hero">
          <img class="logo" src="assets/logo/logo-color.svg" alt="S'more Logo" />
          <h3 class="pretagline">Modern, modular Web Components chock-full of</h3>
          <h2 class="tagline">Gooey GUI Goodness</h2>
        </section>

        <section class="cta">
          <div class="prompt">
            <div class="dots"> <span/> <span/> <span/> </div>
            <span class="symbol">❯ </span>
            <div class="text">
              <span class="highlight" onClick={() => this.handlePromptClick()}>{this.prompt}</span>
              <span class="copy-confirm">Copied!</span>
            </div>
          </div>
        </section>

        <section class="benefits">
          <div class="container">
            <div>
              <h3>Unique</h3>
              <p>You won't find yet another set of buttons and nav menus here, but you will find a unique range of handy micro-interactions.</p>
            </div>
            <div>
              <h3>Unopinionated</h3>
              <p>Style your app, your way. You won't have to wrestle with any S'more-specific styling.</p>
            </div>
            <div>
              <h3>Modular</h3>
              <p>Install only what you need, when you need it. Each component is its own module.</p>
            </div>
            <div>
              <h3>Modern</h3>
              <p>Built on modern web-standards, supported in all your favorite browsers.</p>
            </div>
            <div>
              <h3>Flexible</h3>
              <p>Built with <a href="https://stenciljs.com">Stencil</a>, S'more components can be used with any framework (or no framework at all!)</p>
            </div>
            <div>
              <h3>Fast</h3>
              <p>Speed up your work flow by relying on our library of common UI patterns.</p>
            </div>
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

      </article>
    );
  }
}
