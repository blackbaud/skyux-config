import {
  NgModule
} from '@angular/core';

import {
  SkyAppParamsConfig
} from './public/public_api';

export function paramsConfigFactory(): SkyAppParamsConfig {
  return new SkyAppParamsConfig({
    params: {
      envid: {
        required: true
      },
      svcid: {
        value: 'tcs'
      }
    }
  });
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
