import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './../models/tutorial.model';
import { EntityCollectionService, EntityServices } from 'ngrx-data';
import { EntityNames } from '../constants/entity.constants';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})


export class ReadComponent implements OnInit {
  tutorialService: EntityCollectionService<Tutorial>;
  tutorials$: Observable<Tutorial[]>;

  constructor(entityServices: EntityServices) {
    this.tutorialService = entityServices.getEntityCollectionService(EntityNames.tutorial);
  }

  removeTutorial(tutorial: Tutorial) {
    this.tutorialService.delete(tutorial);
  }

  refresh() {
    this.tutorialService.getAll();
  }

  ngOnInit() {
    this.tutorials$ = this.tutorialService.entities$;
  }
}
