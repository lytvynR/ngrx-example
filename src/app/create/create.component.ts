import { Component, OnInit } from '@angular/core';
import { Tutorial } from './../models/tutorial.model';
import { EntityServices, EntityCollectionService } from 'ngrx-data';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  tutorialService: EntityCollectionService<Tutorial>;

  constructor(entityServices: EntityServices) {
    this.tutorialService = entityServices.getEntityCollectionService('Tutorial');
  }

  addTutorial(name, url) {
    let tutorial: Tutorial = {url: url, name: name};
    this.tutorialService.add(tutorial).subscribe(r => console.log());
  }

  ngOnInit() {
  }
}
