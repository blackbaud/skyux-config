import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';

import {
  SkyAppConfigModuleForRootArgs
} from './app-config-module-for-root-args';

import {
  SkyAppConfigHost
} from './app-config-host';

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
            const appConfigHost = new SkyAppConfigHost();
            appConfigHost.init(config.host);
            return appConfigHost;
          }
        }
      ]
    };
  }
}
