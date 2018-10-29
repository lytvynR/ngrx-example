import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './../models/tutorial.model';
import { EntityCollectionService, EntityServices } from 'ngrx-data';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})


export class ReadComponent implements OnInit {
  // constructor(private store: Store<AppState>, private tutorialService: TutorialService) {
  //   this.tutorials$ = store.select('tutorial');
  // }
  tutorialService: EntityCollectionService<Tutorial>;
  tutorials$: Observable<Tutorial[]>;

  constructor(entityServices: EntityServices) {
    this.tutorialService = entityServices.getEntityCollectionService('Tutorial');
    this.tutorialService.getAll();
  }

  removeTutorial(tutorial: Tutorial) {
    this.tutorialService.delete(tutorial);
  }

  ngOnInit() {
    this.tutorials$ = this.tutorialService.entities$;
  }

  addTutorial(name, url) {
    let tutorial: Tutorial = { url: url, name: name };
    this.tutorialService.add(tutorial);

  }
}
