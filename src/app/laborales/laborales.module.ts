import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboralesPageRoutingModule } from './laborales-routing.module';

import { LaboralesPage } from './laborales.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboralesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LaboralesPage]
})
export class LaboralesPageModule {}
