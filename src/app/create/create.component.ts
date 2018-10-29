import { Component, OnInit } from '@angular/core';
import { Tutorial } from './../models/tutorial.model';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { EntityNames } from '../constants/entity.constants';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  tutorialService: EntityCollectionService<Tutorial>;

  constructor(entityServices: EntityServices) {
    this.tutorialService = entityServices.getEntityCollectionService(EntityNames.tutorial);
  }

  addTutorial(name, url) {
    let tutorial: Tutorial = { url: url, name: name };
    this.tutorialService.add(tutorial);
  }

  ngOnInit() {
  }
}
