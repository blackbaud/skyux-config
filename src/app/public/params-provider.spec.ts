import {
  SkyAppRuntimeConfigParamsProvider
} from './params-provider';

import {
  SkyAppRuntimeConfigParams
} from './params';

describe('SkyAppRuntimeConfigParamsProvider', () => {

  it('should return params', () => {
    const params = new SkyAppRuntimeConfigParams(
      'https://foobar.com/',
      {
        envid: {
          value: 'foobar'
        }
      }
    );

    const provider = new SkyAppRuntimeConfigParamsProvider(params);

    expect(provider.params.get('envid')).toEqual('foobar');
  });

});
