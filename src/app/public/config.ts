import { Injectable } from '@angular/core';
import { SkyAppRuntimeConfigParams } from './params';
import { SkyuxConfigParams } from './config-params';

export interface RuntimeConfigApp {
  base: string;
  inject: boolean;
  name?: string;
  template: string;
}

export class SkyuxPactConfig {
  public providers?: {
    [provider: string]: {
      host?: string;
      port?: string;
      fullUrl?: string;
    }
  };
  public pactProxyServer?: string;
}

export interface SkyuxConfigE2ETestSettings {
  browserSet?: 'speedy';
}

export interface SkyuxConfigUnitTestSettings {
  browserSet?: 'speedy' | 'quirky' | 'paranoid';
}

export interface SkyuxConfigTestSettings {
  e2e?: SkyuxConfigE2ETestSettings;
  unit?: SkyuxConfigUnitTestSettings;
}

export interface RuntimeConfig {
  app: RuntimeConfigApp;
  command?: string;  // Dynamically added in "higher up" webpacks
  componentsPattern: string;
  componentsIgnorePattern: string;
  handle404?: boolean;  // Dynamically added in sky-pages-module-generator.js
  includeRouteModule: boolean;
  pactConfig?: SkyuxPactConfig;
  params: SkyAppRuntimeConfigParams;
  routes?: Object[]; // Dynamically added in sky-pages-module-generator.js
  routesPattern: string;
  runtimeAlias: string;
  spaPathAlias: string;
  skyPagesOutAlias: string;
  skyuxPathAlias: string;
  srcPath: string;
  useTemplateUrl: boolean;
}

export interface SkyuxConfigA11y {
  rules?: any;
}

export interface SkyuxConfigApp {
  base?: string;
  externals?: Object;
  port?: string;
  styles?: string[];
  title?: string;
}

export interface SkyuxConfigHost {
  url?: string;
}

export interface SkyuxConfig {
  $schema?: string;
  a11y?: SkyuxConfigA11y | boolean;
  app?: SkyuxConfigApp;
  appSettings?: any;
  auth?: boolean;
  codeCoverageThreshold?: 'none' | 'standard' | 'strict';
  command?: string;
  compileMode?: string;
  cssPath?: string;
  help?: any;
  host?: SkyuxConfigHost;
  importPath?: string;
  mode?: string;
  moduleAliases?: {[key: string]: string};
  name?: string;
  pacts?: any[];
  params?: SkyuxConfigParams; // List of allowed params
  pipelineSettings?: any;
  plugins?: string[];
  redirects?: any;
  routes?: {
    public?: any[],
    referenced?: any[]
  };
  testSettings?: SkyuxConfigTestSettings;
  omnibar?: any;
  useHashRouting?: boolean;
  skyuxModules?: string[];
}

@Injectable()
export class SkyAppConfig {

  // Any properties dynamically added via code
  public runtime: RuntimeConfig;

  // Any properties defined in or inherited from skyuxconfig.json / skyuxconfig.command.json
  public skyux: SkyuxConfig;

}
