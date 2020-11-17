import {
  WindowRef
} from './window-ref';

describe('WindowRef', () => {
  it('should return the native window object', () => {
    const ref = new WindowRef();
    expect(ref.nativeWindow).toBe(window);
  });
});
