import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { ServicioService } from 'src/app/service/servicio.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    HttpClientModule

  ],
  declarations: [RegistroPage],
  providers : [ServicioService]
})
export class RegistroPageModule {}
