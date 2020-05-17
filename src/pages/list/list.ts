import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from '../Global';
import { Http } from '@angular/http';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  myorders: any;
  myOrderData: boolean = false;
  constructor(public navCtrl: NavController,
    public http: Http) {

  }
  ngOnInit(){
    this.order();
  }
  order(){
    this.http.get(`${Global.url}admin/bookings/listAll/`+'Cancelled').subscribe(
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
