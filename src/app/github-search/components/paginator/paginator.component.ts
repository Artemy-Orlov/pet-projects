import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() currentPage;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  change(way: string): void {
    this.changePage.emit(way === 'forward' ? this.currentPage + 1 : this.currentPage - 1);
  }

}
