import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Global } from '../Global';

/**
 * Generated class for the CloseOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-close-orders',
  templateUrl: 'close-orders.html',
})
export class CloseOrdersPage {
  myorders: any;
  myOrderData: boolean = false;
  constructor(public navCtrl: NavController,
    public http: Http) {

  }
  ngOnInit(){
    this.order();
  }
  order(){
    this.http.get(`${Global.url}admin/bookings/listAll/`+'Closed').subscribe(
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
}
