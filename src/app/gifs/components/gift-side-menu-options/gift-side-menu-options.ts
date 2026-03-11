import { Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../services/gifs.service';

interface MenuOptions {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

// interface MenuOptionsHistory {
//   icon: string;
//   title: string;
// }

@Component({
  selector: 'gift-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gift-side-menu-options.html',
})
export class GiftSideMenuOptions {
  gifService = inject(GifService);
  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];

  // MenuOptionsHistory: MenuOptionsHistory[] = [
  //   {
  //     icon: '',
  //     title:
  //   }
  // ]
}
