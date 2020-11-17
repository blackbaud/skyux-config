import {
  SkyAppRuntimeParamsProvider
} from './params-provider';

import {
  WindowRef
} from './window-ref';

describe('SkyAppRuntimeParamsProvider', () => {

  it('should return runtime params', () => {
    const config = {
      params: {
        envid: {
          value: 'foobar'
        }
      }
    };

    const provider = new SkyAppRuntimeParamsProvider(config, new WindowRef());

    expect(provider.params.get('envid')).toEqual('foobar');
  });

});
