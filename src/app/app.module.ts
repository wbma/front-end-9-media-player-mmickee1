import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MediaProvider} from '../providers/media/media';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {ProfilePage} from "../pages/profile/profile";
import {Upload0Page} from "../pages/upload/upload";
import {HttpClientModule} from "@angular/common/http";
import {HomepagePage} from "../pages/homepage/homepage";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {PipesModule} from "../pipes/pipes.module";
import {MediaplayerPage} from "../pages/mediaplayer/mediaplayer";
import {PhotoViewer} from '@ionic-native/photo-viewer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomepagePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    Upload0Page,
    MediaplayerPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomepagePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    Upload0Page,
    MediaplayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider,
    HttpClientModule,
    PhotoViewer,

  ]
})
export class AppModule {
}
