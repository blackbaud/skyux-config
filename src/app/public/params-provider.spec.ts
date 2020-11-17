import {
  SkyAppParamsConfig
} from './params-config';

import {
  SkyAppRuntimeParamsProvider
} from './params-provider';

import {
  WindowRef
} from './window-ref';

describe('SkyAppRuntimeConfigParamsProvider', () => {

  it('should return params', () => {
    const config = new SkyAppParamsConfig();
    config.params = {
      envid: {
        value: 'foobar'
      }
    };

    const provider = new SkyAppRuntimeParamsProvider(config, new WindowRef());

    expect(provider.params.get('envid')).toEqual('foobar');
  });

});
