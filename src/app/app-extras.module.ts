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
    SkyAppConfigModule.forRoot()
  ]
})
export class AppExtrasModule { }
