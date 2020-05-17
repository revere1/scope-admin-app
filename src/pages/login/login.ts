import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../Global';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { OtpPage } from '../otp/otp';
//import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private signInForm: FormGroup;
  result: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private toast: ToastController,
    //private nativeStorage: NativeStorage
  ) {
    this.signInForm = this.formBuilder.group({
      mobile_number: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  signIn() {
    localStorage.setItem('mobile', JSON.parse(this.signInForm.get('mobile_number').value))
    // Global.mobileNumber = this.signInForm.get('mobile_number').value;
    // this.nativeStorage.setItem('mobile', {property: this.signInForm.get('mobile_number').value})
    // .then(
    // () => console.log('Stored item!'),
    // error => console.error('Error storing item', error)
  // );
    this.http.get(`${Global.url}admin/adminLogin/`+this.signInForm.get('mobile_number').value)
      .subscribe(data => {
        const result = data.json()
        if (result.status === 200) {
          if (result.Messages === undefined) {
            const toast = this.toast.create({
              message: `This is OTP:${result.Messages}`,
              duration: 2000
            });
            toast.present();
          } else {
            const toast = this.toast.create({
              message: `This is OTP:${result.Messages}`,
              duration: 2000
            });
            toast.present();
            localStorage.setItem('otp', JSON.stringify(result.Messages))
            this.navCtrl.setRoot(OtpPage)
          }
        } else if (result.status === 400) {
          const toast = this.toast.create({
            message: result.Message,
            duration: 2000
          });
          toast.present();
        }
      },
        err => {
          const alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Something went wrong ,Please try again!',
            buttons: ['OK']
          });
          alert.present();
        }
      );
  }
  login(){
    this.navCtrl.setRoot(TabsPage)
  }

}
