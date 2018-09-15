import { TestWindow } from '@stencil/core/testing';
import { Docs } from './page-docs';

describe('page-docs', () => {
  it('should build', () => {
    expect(new Docs()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageDocsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Docs],
        html: '<page-docs></page-docs>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing

  });
});
