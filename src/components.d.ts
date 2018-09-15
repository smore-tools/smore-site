/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';

import {
  MatchResults,
} from '@stencil/router';

declare global {

  namespace StencilComponents {
    interface AppFooter {

    }
  }

  interface HTMLAppFooterElement extends StencilComponents.AppFooter, HTMLStencilElement {}

  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };
  interface HTMLElementTagNameMap {
    'app-footer': HTMLAppFooterElement;
  }
  interface ElementTagNameMap {
    'app-footer': HTMLAppFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-footer': JSXElements.AppFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface AppFooterAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHeader {

    }
  }

  interface HTMLAppHeaderElement extends StencilComponents.AppHeader, HTMLStencilElement {}

  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
  }
  interface ElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-header': JSXElements.AppHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageDemos {

    }
  }

  interface HTMLPageDemosElement extends StencilComponents.PageDemos, HTMLStencilElement {}

  var HTMLPageDemosElement: {
    prototype: HTMLPageDemosElement;
    new (): HTMLPageDemosElement;
  };
  interface HTMLElementTagNameMap {
    'page-demos': HTMLPageDemosElement;
  }
  interface ElementTagNameMap {
    'page-demos': HTMLPageDemosElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-demos': JSXElements.PageDemosAttributes;
    }
  }
  namespace JSXElements {
    export interface PageDemosAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageDocs {
      'match': MatchResults;
    }
  }

  interface HTMLPageDocsElement extends StencilComponents.PageDocs, HTMLStencilElement {}

  var HTMLPageDocsElement: {
    prototype: HTMLPageDocsElement;
    new (): HTMLPageDocsElement;
  };
  interface HTMLElementTagNameMap {
    'page-docs': HTMLPageDocsElement;
  }
  interface ElementTagNameMap {
    'page-docs': HTMLPageDocsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-docs': JSXElements.PageDocsAttributes;
    }
  }
  namespace JSXElements {
    export interface PageDocsAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageHome {

    }
  }

  interface HTMLPageHomeElement extends StencilComponents.PageHome, HTMLStencilElement {}

  var HTMLPageHomeElement: {
    prototype: HTMLPageHomeElement;
    new (): HTMLPageHomeElement;
  };
  interface HTMLElementTagNameMap {
    'page-home': HTMLPageHomeElement;
  }
  interface ElementTagNameMap {
    'page-home': HTMLPageHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-home': JSXElements.PageHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface PageHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageNotfound {

    }
  }

  interface HTMLPageNotfoundElement extends StencilComponents.PageNotfound, HTMLStencilElement {}

  var HTMLPageNotfoundElement: {
    prototype: HTMLPageNotfoundElement;
    new (): HTMLPageNotfoundElement;
  };
  interface HTMLElementTagNameMap {
    'page-notfound': HTMLPageNotfoundElement;
  }
  interface ElementTagNameMap {
    'page-notfound': HTMLPageNotfoundElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-notfound': JSXElements.PageNotfoundAttributes;
    }
  }
  namespace JSXElements {
    export interface PageNotfoundAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
