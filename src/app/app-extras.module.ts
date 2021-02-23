import {
  NgModule
} from '@angular/core';

import {
  SkyAppConfigModule
} from './public/public_api';

/**
 * Demonstrates how to provide params configuration from a consumer's application.
 */
@NgModule({
  imports: [
    SkyAppConfigModule.forRoot({
      params: {
        envid: {
          required: true
        },
        svcid: {
          value: 'tcs'
        }
      },
      host: {
        url: 'https://localhost:5243/'
      }
    })
  ]
})
export class AppExtrasModule { }
