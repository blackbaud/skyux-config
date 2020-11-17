import {
  Component
} from '@angular/core';

import {
  SkyAppRuntimeParamsProvider
} from './public/public_api';

@Component({
  selector: 'app-home',
  template: `Home works!`
})
export class HomeComponent {

  constructor(
    paramsProvider: SkyAppRuntimeParamsProvider
  ) {
    console.log(paramsProvider.params);
  }

}
