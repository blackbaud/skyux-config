import {
  Injectable,
  Optional
} from '@angular/core';

import {
  SkyuxConfigHost
} from './config';

import {
  SkyAppConfigHostArgs
} from './host-args';

@Injectable()
export class SkyAppConfigHost {

  public get host(): SkyuxConfigHost {
    return this._host;
  }

  private _host: SkyuxConfigHost;

  constructor(
    @Optional() args?: SkyAppConfigHostArgs
  ) {
    const defaults: SkyuxConfigHost = {
      frameOptions: {
        none: true
      },
      url: 'https://host.nxt.blackbaud.com/'
    };

    this._host = {...defaults, ...args?.host || {}};
  }
}
