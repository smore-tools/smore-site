import { TestWindow } from '@stencil/core/testing';
import { Home } from './page-home';

describe('app', () => {
  it('should build', () => {
    expect(new Home()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageHomeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Home],
        html: '<app-home></app-home>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
