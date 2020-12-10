import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienciasPageRoutingModule } from './experiencias-routing.module';

import { ExperienciasPage } from './experiencias.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ExperienciasPage]
})
export class ExperienciasPageModule {}
