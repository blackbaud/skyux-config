import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';

import {
  SkyAppConfigModuleForRootArgs
} from './config-module-for-root-args';

import {
  SkyAppConfigHost
} from './host';

import {
  SkyAppParamsConfig
} from './params-config';

@NgModule({})
export class SkyAppConfigModule {

  public static forRoot(
    config: SkyAppConfigModuleForRootArgs = {}
  ): ModuleWithProviders<SkyAppConfigModule> {

    return {
      ngModule: SkyAppConfigModule,
      providers: [
        {
          provide: SkyAppParamsConfig,
          useFactory() {
            return new SkyAppParamsConfig({
              params: config.params
            });
          }
        },
        {
          provide: SkyAppConfigHost,
          useFactory() {
            return new SkyAppConfigHost({
              host: config.host
            });
          }
        }
      ]
    };
  }
}
