import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";

/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html'
})
export class HomepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  MediaFiles: any;


  ionViewDidLoad() {
    // this.mediaProvider.getUserData('content.of.tokenstring').subscribe(response => {
    this.mediaProvider.getUserData('token').subscribe(response => {
      console.log('Welcome ' + response['full_name']);
      this.displayImages();
    }, (error: HttpErrorResponse) => {
      console.log(error);
     // this.navCtrl.push('login');
    });
  }

  displayImages() {
    this.mediaProvider.getNewFiles().subscribe(response => {
      console.log(response);
      this.MediaFiles = response;
      console.log(this.MediaFiles);
    });
  }

}
