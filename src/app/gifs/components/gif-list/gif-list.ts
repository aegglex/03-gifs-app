import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';

@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifList {}
