import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  options: InAppBrowserOptions = {
    location: 'no',
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'no', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  constructor(private inAppBrowser: InAppBrowser) {
    this.inAppBrowser.create('http://panel.kuracja.testowa.eu:8000', '_self', this.options);
  }
}
