import {
  Injectable
} from '@angular/core';

import {
  SkyuxConfigParams
} from './config-params';

@Injectable()
export class SkyAppParamsConfig {

  public params: SkyuxConfigParams = {
    envid: {
      required: false
    },
    leid: {
      required: false
    },
    svcid: {
      required: false
    }
  };

}
