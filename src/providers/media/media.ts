import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../app/user";
import {NavController, NavParams} from "ionic-angular";


/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  username: string;
  password: string;
  status: string;

  loginUrl = 'http://media.mw.metropolia.fi/wbma/login';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/media';

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  public getUserData(token: string): Observable<User> {
    const headers = new HttpHeaders().set('x-access-token', token);
    return this.http.get<User>(this.apiUrl + '/users/user', {headers: headers});
  }

  public getNewFiles() {
    return this.http.get(this.mediaUrl);
  }

  public login() {
    console.log('uname: ' + this.username);
    console.log('pwd: ' + this.password);
    const body = {
      username: this.username,
      password: this.password,
    };
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    this.http.post(this.loginUrl, body, settings).subscribe(response => {
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
      // this.navCtrl.push('front');
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.status = error.error.message;
    });
  }

  public register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  public uploading(file) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.post(this.mediaUrl, file, settings);
  }

}
