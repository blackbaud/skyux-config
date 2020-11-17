import {
  NgModule
} from '@angular/core';

import {
  SkyAppParamsConfig
} from './public/public_api';

function paramsConfigFactory(): SkyAppParamsConfig {
  const config = new SkyAppParamsConfig();
  config.params = {
    envid: {
      required: true
    },
    svcid: {
      value: 'tcs'
    }
  };

  return config;
}

@NgModule({
  providers: [
    {
      provide: SkyAppParamsConfig,
      useFactory: paramsConfigFactory
    }
  ]
})
export class AppExtrasModule { }
