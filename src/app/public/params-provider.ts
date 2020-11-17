import {
  Injectable
} from '@angular/core';

import {
  SkyAppParamsConfig
} from './params-config';

import {
  SkyAppRuntimeConfigParams
} from './params';

import {
  WindowRef
} from './window-ref';

@Injectable({
  providedIn: 'root'
})
export class SkyAppRuntimeParamsProvider {

  public get params(): SkyAppRuntimeConfigParams {
    return this._params;
  }

  private _params: SkyAppRuntimeConfigParams;

  constructor(
    config: SkyAppParamsConfig,
    windowRef: WindowRef
  ) {
    this._params = new SkyAppRuntimeConfigParams(
      windowRef.nativeWindow.location.href,
      config.params
    );
  }

}
