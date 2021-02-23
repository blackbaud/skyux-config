import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';

import { SkyAppConfigModuleForRootArgs } from './config-module-for-root-args';
import { SkyAppParamsConfig } from './params-config';
import { SKY_APP_CONFIG_MODULE_FOR_ROOT_ARGS } from './config-module-for-root-args-token';
import { SkyAppConfigHost } from './host';

export function paramsConfigFactory(
  config: SkyAppConfigModuleForRootArgs
): SkyAppParamsConfig {
  return new SkyAppParamsConfig({
    params: config.params
  });
}

export function appConfigHostFactory(
  config: SkyAppConfigModuleForRootArgs
): SkyAppConfigHost {
  return new SkyAppConfigHost({
    host: config.host
  });
}

@NgModule({})
export class SkyAppConfigModule {

  public static forRoot(
    config: SkyAppConfigModuleForRootArgs = {}
  ): ModuleWithProviders<SkyAppConfigModule> {

    return {
      ngModule: SkyAppConfigModule,
      providers: [
        {
          provide: SKY_APP_CONFIG_MODULE_FOR_ROOT_ARGS,
          useValue: config
        },
        {
          provide: SkyAppParamsConfig,
          useFactory: paramsConfigFactory,
          deps: [SKY_APP_CONFIG_MODULE_FOR_ROOT_ARGS]
        },
        {
          provide: SkyAppConfigHost,
          useFactory: appConfigHostFactory,
          deps: [SKY_APP_CONFIG_MODULE_FOR_ROOT_ARGS]
        }
      ]
    };
  }
}
