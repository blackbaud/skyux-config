import {
  Injectable, Optional
} from '@angular/core';

import {
  SkyuxConfigParams
} from './config-params';

import {
  SkyAppParamsConfigArgs
} from './params-config-args';

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

  private _params: SkyuxConfigParams;

  constructor(
    @Optional() args?: SkyAppParamsConfigArgs
  ) {
    this._params = {
      ...DEFAULTS.params,
      ...args?.params || {}
    };
  }

}
