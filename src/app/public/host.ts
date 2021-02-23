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

const DEFAULTS: SkyuxConfigHost = {
  frameOptions: {
    none: true
  },
  url: 'https://host.nxt.blackbaud.com/'
};

@Injectable()
export class SkyAppConfigHost {

  public get host(): SkyuxConfigHost {
    return this._host;
  }

  private _host: SkyuxConfigHost;

  constructor(
    @Optional() args?: SkyAppConfigHostArgs
  ) {
    this._host = {
      ...DEFAULTS,
      ...args?.host || {}
    };
  }
}
