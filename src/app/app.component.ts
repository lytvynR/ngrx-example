import { Component } from '@angular/core';
import { EntityServices } from 'ngrx-data';
import { EntityNames } from './constants/entity.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(entityServices: EntityServices) {
    entityServices.getEntityCollectionService(EntityNames.tutorial).getAll();
  }
}
