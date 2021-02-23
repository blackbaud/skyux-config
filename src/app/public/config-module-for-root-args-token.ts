import {
  InjectionToken
} from '@angular/core';

import {
  SkyAppConfigModuleForRootArgs
} from './config-module-for-root-args';

export const SKY_APP_CONFIG_MODULE_FOR_ROOT_ARGS
  = new InjectionToken<SkyAppConfigModuleForRootArgs>('SKY_APP_CONFIG_MODULE_FOR_ROOT_ARGS');
