import { TestWindow } from '@stencil/core/testing';
import { Codeblock } from './codeblock';

describe('codeblock', () => {
  it('should build', () => {
    expect(new Codeblock()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCodeblockElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Codeblock],
        html: '<codeblock></codeblock>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
