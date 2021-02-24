import {
  SkyuxConfigHost
} from './config';

import {
  SkyuxConfigParams
} from './config-params';

export interface SkyAppConfigModuleForRootArgs {

  /**
   * Blackbaud Only - Specifies configuration options for communication with SKY UX Host.
   */
  host?: SkyuxConfigHost;

  /**
   * Specifies a list of parameters that are allowed at runtime.
   */
  params?: SkyuxConfigParams;

}
