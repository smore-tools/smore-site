import { TestWindow } from '@stencil/core/testing';
import { Demos } from './page-demos';

describe('page-docs', () => {
  it('should build', () => {
    expect(new Demos()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageDocsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Demos],
        html: '<page-docs></page-docs>'
      });
    });

  });
});
