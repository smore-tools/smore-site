---
title: Getting Started
description: S'more can be used with any framework or no framework at all.
---

## Using a framework? 
Check out the Stencil website to read integration guides for [Angular](https://stenciljs.com/docs/angular), [React](https://stenciljs.com/docs/react), [Vue](https://stenciljs.com/docs/vue), and [Ember](https://stenciljs.com/docs/ember).

## Using Stencil

```shell
npm install @smore/core
```

Then, in your `<app-root>` component, just import the module.
```tsx
import { Component } from '@stencil/core';
import '@smore/core';
```

## Using HTML
Adding S'more components to your project is as simple as including a single `<script>` tag!

```html
<script src="https://unpkg.com/@smore/core/dist/smore.js"> </script>
```

If you're using ES Modules, just import the components like so...

```js
import { defineCustomElements } from 'https://unpkg.com/@smore/core/dist/esm/es5/smore.define.js';
defineCustomElements(window);
```
