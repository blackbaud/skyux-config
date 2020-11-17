import {
  NgModule
} from '@angular/core';

import {
  SkyAppParamsConfig
} from './public/public_api';

@NgModule({
  providers: [
    {
      provide: SkyAppParamsConfig,
      useValue: {
        params: {
          envid: {
            required: true
          },
          svcid: {
            value: 'tcs'
          }
        }
      }
    }
  ]
})
export class AppExtrasModule { }