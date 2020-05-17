import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiveDetailsPage } from './active-details';

@NgModule({
  declarations: [
    ActiveDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ActiveDetailsPage),
  ],
})
export class ActiveDetailsPageModule {}
