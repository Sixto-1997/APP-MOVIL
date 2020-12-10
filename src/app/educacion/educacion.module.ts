import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducacionPageRoutingModule } from './educacion-routing.module';

import { EducacionPage } from './educacion.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EducacionPage]
})
export class EducacionPageModule {}
