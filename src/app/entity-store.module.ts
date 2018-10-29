import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgrxDataModule,
  DefaultDataServiceConfig
} from 'ngrx-data';
import { entityConfig } from './entity-metadata';
import { TutorialService } from './services/tutorial.service';


@NgModule({
  imports: [
    CommonModule,
    NgrxDataModule.forRoot(entityConfig)
  ],
  declarations: [],
  providers: [TutorialService,
    { provide: DefaultDataServiceConfig, useValue: {} }
  ]
})

export class EntityStoreModule { }
