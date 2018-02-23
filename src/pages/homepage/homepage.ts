import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginPage} from "../login/login";
import {Media} from "../../app/media";
import {MediaplayerPage} from "../mediaplayer/mediaplayer";

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

  files: any;
  MediaFiles: any;
  file: Media = {
    file_id: 0,
    filename: '',
    title: '',
    description: '',
    user_id: 0,
    media_type: '',
    mime_type: '',
    time_added: ''
  };

  ionViewDidLoad() {
    this.mediaProvider.getUserData().subscribe(response => {
      console.log('Welcome ' + response['full_name']);
      this.displayImages();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.navCtrl.push(LoginPage);
    });
  }

  displayImages() {
    this.mediaProvider.getNewFiles().subscribe(response => {
      console.log(response);
      this.MediaFiles = response;
    });
  }

  openOnePic(id) {
    this.navCtrl.push(MediaplayerPage, {mediaplayerid: id});
  }

}
