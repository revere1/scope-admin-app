import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../Global';
import { ActiveDetailsPage } from '../active-details/active-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myorders: any;
  myOrderData: boolean = false;
  constructor(public navCtrl: NavController,
    public http: Http) {

  }
  ngOnInit(){
    this.order();
  }
  order(){
    this.http.get(`${Global.url}admin/bookings/listAll/`+'Active').subscribe(
      getData =>{
        this.myorders = getData.json().result;
        console.log('orderuser result: ',this.myorders);
        if (this.myorders.length === 0 || this.myorders === 'no records found') {
          this.myOrderData = true;
          return false;
        }
        this.myOrderData = true;
      })
  }

  viewSP(bookId,userId){
    this.navCtrl.push(ActiveDetailsPage,{bid: bookId, uid: userId})
  }
}
