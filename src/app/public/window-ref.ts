import {
  Injectable
} from '@angular/core';

/**
 * @internal
 */
@Injectable({
  providedIn: 'root'
})
export class WindowRef {
  public get nativeWindow(): any {
    return window;
  }
}
