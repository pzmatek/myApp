import { Component } from '@angular/core';

import { Platform} from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser, InAppBrowserOptions  } from '@ionic-native/in-app-browser';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  options: InAppBrowserOptions = {
    location: 'no', 
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'no', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public iab: InAppBrowser
  ) {
    this.initializeApp();
    this.iab.create('http://terapie.centi.pl','_self', this.options);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
