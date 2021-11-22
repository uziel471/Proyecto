import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewlistasPageRoutingModule } from './viewlistas-routing.module';

import { ViewlistasPage } from './viewlistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewlistasPageRoutingModule
  ],
  declarations: [ViewlistasPage]
})
export class ViewlistasPageModule {}
