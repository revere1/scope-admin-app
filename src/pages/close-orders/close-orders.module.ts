import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloseOrdersPage } from './close-orders';

@NgModule({
  declarations: [
    CloseOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(CloseOrdersPage),
  ],
})
export class CloseOrdersPageModule {}
