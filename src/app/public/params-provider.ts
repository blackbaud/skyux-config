import {
  Injectable
} from '@angular/core';

import {
  SkyAppRuntimeConfigParams
} from './params';

@Injectable({
  providedIn: 'root'
})
export class SkyAppRuntimeConfigParamsProvider {

  public get params(): SkyAppRuntimeConfigParams {
    return this._params;
  }

  constructor(
    private _params: SkyAppRuntimeConfigParams
  ) { }

}
