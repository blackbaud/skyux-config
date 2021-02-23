import {
  SkyAppConfigHost
} from './host';

describe('SkyAppConfigHost', () => {

  it('should set defaults', () => {
    const result = new SkyAppConfigHost();
    expect(result.host).toEqual({
      frameOptions: {
        none: true
      },
      url: 'https://host.nxt.blackbaud.com/'
    });
  });

  it('should merge args with defaults', () => {
    const result = new SkyAppConfigHost({
      host: {
        url: 'https://app.blackbaud.com/',
        bbCheckout: {
          version: '2'
        }
      }
    });

    expect(result.host).toEqual({
      frameOptions: {
        none: true
      },
      url: 'https://app.blackbaud.com/',
      bbCheckout: {
        version: '2'
      }
    });
  });

});
