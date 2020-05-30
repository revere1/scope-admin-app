import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { OtpPage } from '../pages/otp/otp';
import { ActiveDetailsPage } from '../pages/active-details/active-details';
import { CloseOrdersPage } from '../pages/close-orders/close-orders';
import { HttpClientModule } from '@angular/common/http';

//import { NativeStorage } from '@ionic-native/native-storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage, LoginPage, TabsPage, ListPage, ActiveDetailsPage, CloseOrdersPage, OtpPage
  ],
  imports: [
    BrowserModule,HttpModule,ReactiveFormsModule, FormsModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage, TabsPage, ListPage, ActiveDetailsPage, CloseOrdersPage, OtpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
