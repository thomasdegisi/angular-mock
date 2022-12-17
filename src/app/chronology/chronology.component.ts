import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChronologyComponent {
  items = Array.from({length: 10000}).map((_, i) => `2022-12-17 11:00:00 CST: God is good. He loves us. His creation is glorious. Item #${i}`);
}
