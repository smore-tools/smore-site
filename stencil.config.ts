import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  copy: [
    { src: 'content', dest: 'content' }
  ],
  outputTargets: [
    { type: 'www', dir: 'dist' }
  ]
};
