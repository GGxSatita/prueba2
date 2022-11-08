import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPrincipalPageRoutingModule } from './pagina-principal-routing.module';

import { PaginaPrincipalPage } from './pagina-principal.page';

import { Component, ViewChild } from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular'
import { ServicioService } from 'src/app/service/servicio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPrincipalPageRoutingModule
  ],
  declarations: [PaginaPrincipalPage],
  providers : [ServicioService]
})
export class PaginaPrincipalPageModule {}
