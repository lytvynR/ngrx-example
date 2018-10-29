import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { TutorialService } from './services/tutorial.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityStoreModule } from './entity-store.module';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EntityStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
