import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Tutorial } from '../models/tutorial.model';

@Injectable({ providedIn: 'root' })
export class TutorialService extends EntityCollectionServiceBase<Tutorial> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Tutorial', serviceElementsFactory);
  }
}
