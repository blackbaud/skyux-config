import {
  Injectable
} from '@angular/core';

import {
  SkyAppParamsConfig
} from './params-config';

import {
  SkyAppRuntimeConfigParams
} from './params';

@Injectable({
  providedIn: 'root'
})
export class SkyAppRuntimeParamsProvider {

  public get params(): SkyAppRuntimeConfigParams {
    return this._params;
  }

  private _params: SkyAppRuntimeConfigParams;

  constructor(
    config: SkyAppParamsConfig
  ) {
    this._params = new SkyAppRuntimeConfigParams(
      window.location.href,
      config.params
    );
  }

}
