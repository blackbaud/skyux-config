import {
  Injectable
} from '@angular/core';

/**
 * @internal
 */
@Injectable()
export class WindowRef {
  public get nativeWindow(): any {
    return window;
  }
}
