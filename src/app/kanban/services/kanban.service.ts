import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoardModel } from '../models/board.model';
import { ColumnModel } from '../models/column.model';

@Injectable()
export class KanbanService {

  kanbanData: BoardModel = new BoardModel('Kanban', [
    new ColumnModel('Ideas', [
      {name: 'Create dialog', description: 'Generate component for create, view or edit task', comment: 'It\'s gonna be a little harder'},
      {name: 'Drag & Drop', description: 'Import DragDropModule to the SharedModule, add params and directives to the layout',
        comment: 'It must be cool'},
    ]),
    new ColumnModel('Research', [
      {name: 'Methods in TS', description: 'Write methods for work with data from service',
        comment: 'Task move to research'},
    ]),
    new ColumnModel('Estimation', [
      {name: 'Create service', description: 'Generate a service to create start data and store data',
        comment: 'The data will be stored in a variable of type Observable so that you can subscribe to it.'},
    ]),
    new ColumnModel('Todo', [
      {name: 'Add css-styles', description: 'Write css-styles for layout of component', comment: 'Flex-style in column flex-direction'},

    ]),
    new ColumnModel('Done', [
      {name: 'Create board', description: 'Generate module and component for kanban-board', comment: 'Its was easy'},
      {name: 'To do view', description: 'Write html-part of component', comment: 'Prepared layout for flex style'},
    ])
  ]);

  kanbanDataSbj: BehaviorSubject<BoardModel> = new BehaviorSubject<BoardModel>(this.kanbanData);
  kanbanData$: Observable<BoardModel> = this.kanbanDataSbj.asObservable();

}
