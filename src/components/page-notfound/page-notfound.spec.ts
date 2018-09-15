import { TestWindow } from '@stencil/core/testing';
import { PageNotfound } from './page-notfound';

describe('page-notfound', () => {
  it('should build', () => {
    expect(new PageNotfound()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageNotfoundElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PageNotfound],
        html: '<page-notfound></page-notfound>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
