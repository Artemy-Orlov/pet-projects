import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { PersonModel } from '../../models/person.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent {

  @Input() staff: PersonModel[] = [];
  @Output() edit = new EventEmitter<number>();

  trackByMethod(index: number, el: any): number {
    return el.id;
  }
}


