import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import * as fromComponents from './components';
import { PlayerRoutingModule } from './player-routing.module';
import * as fromPresenters from './presenters';
import { PlayerEffects } from './store/effects';
import * as fromReducers from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
    StoreModule.forFeature('player', fromReducers.reducers),
    EffectsModule.forFeature([PlayerEffects]),
    SharedModule,
  ],
  declarations: [
    ...fromPresenters.presenters,
    ...fromComponents.components,
  ],
})
export class PlayerModule {
}
