import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Tutorial } from '../models/tutorial.model';
import { EntityNames } from '../constants/entity.constants';

@Injectable({ providedIn: 'root' })
export class TutorialService extends EntityCollectionServiceBase<Tutorial> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(EntityNames.tutorial, serviceElementsFactory);
  }
}
