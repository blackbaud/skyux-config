import {
  SkyAppParamsConfig
} from './params-config';

import {
  SkyAppRuntimeParamsProvider
} from './params-provider';

describe('SkyAppRuntimeParamsProvider', () => {

  it('should return runtime params', () => {
    const config = new SkyAppParamsConfig({
      params: {
        envid: {
          value: 'foobar'
        }
      }
    });

    const provider = new SkyAppRuntimeParamsProvider(config);

    expect(provider.params.get('envid')).toEqual('foobar');
  });

});
