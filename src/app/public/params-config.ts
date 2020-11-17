import {
  Injectable
} from '@angular/core';

import {
  SkyuxConfigParams
} from './config-params';

const DEFAULTS = {
  params: {
    envid: {
      required: false
    },
    leid: {
      required: false
    },
    svcid: {
      required: false
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class SkyAppParamsConfig {

  /**
   * Specifies a list of static parameters that are allowed at runtime.
   */
  public get params(): SkyuxConfigParams {
    return this._params || DEFAULTS.params;
  }

  public set params(value: SkyuxConfigParams) {
    this._params = {
      ...DEFAULTS.params,
      ...value || {}
    };
  }

  private _params: SkyuxConfigParams;

}
