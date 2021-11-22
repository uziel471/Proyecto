import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcotizacionPageRoutingModule } from './viewcotizacion-routing.module';

import { ViewcotizacionPage } from './viewcotizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcotizacionPageRoutingModule
  ],
  declarations: [ViewcotizacionPage]
})
export class ViewcotizacionPageModule {}
