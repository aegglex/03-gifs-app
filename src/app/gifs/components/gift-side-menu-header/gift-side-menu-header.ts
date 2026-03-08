import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'gift-side-menu-header',
  imports: [],
  templateUrl: './gift-side-menu-header.html',
})
export class GiftSideMenuHeader {
  envs = environment;
}
