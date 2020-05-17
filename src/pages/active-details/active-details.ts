import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Global } from '../Global';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the ActiveDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active-details',
  templateUrl: 'active-details.html',
})
export class ActiveDetailsPage {
  bookId: any;
  userId: any;
  details: any;
  detailsArray = [];
  status: any;
 constructor(public navCtrl: NavController, 
   public navParams: NavParams,
   private http: Http,
   private toast: ToastController) {
    this.bookId = this.navParams.get('bid')
    this.userId = this.navParams.get('uid')
    this.http.get(`${Global.url}customerbookings/details/${this.userId}/${this.bookId}`).subscribe(
     getData =>{
        this.details = getData.json().result;
        this.status = this.details.status;
        this.detailsArray.push(this.details);
        console.log("ActiveDetailsPage -> detailsArray", this.detailsArray)
       if(this.detailsArray[0].status === 200){
       const toast = this.toast.create({
         message: this.details.Message,
         duration: 2000
       });
       toast.present();
     }
     }, err =>{
       console.log(this.details.Message)
     })
 }
 closeOrder(){
   const headers = new Headers();
   headers.append("Accept", 'application/json');
   headers.append('Content-Type', 'application/json');
   let options = new RequestOptions({ headers: headers });
   const getApiUrl: string = `${Global.url}admin/closeBooking/${this.bookId}`;
   this.http.patch(getApiUrl, options).subscribe(
     getData =>{
       var closeOrderDetails = getData.json();
       console.log('orderuser result: ',JSON.stringify(closeOrderDetails));
       if(closeOrderDetails.status === 200){
       const toast = this.toast.create({
         message: closeOrderDetails.Message,
         duration: 2000
       });
       toast.present();
         this.navCtrl.setRoot(HomePage)
     }
     })
 }
}
