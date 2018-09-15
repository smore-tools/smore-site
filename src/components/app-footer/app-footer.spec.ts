import { TestWindow } from '@stencil/core/testing';
import { AppFooter } from './app-footer';

describe('app-footer', () => {
  it('should build', () => {
    expect(new AppFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppFooterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppFooter],
        html: '<app-footer></app-footer>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
