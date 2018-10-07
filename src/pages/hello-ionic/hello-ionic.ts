import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(private inAppBrowser: InAppBrowser) {
   // const browser = this.inAppBrowser.create('http://panel.kuracja.testowa.eu:8000','_blank');
    


  }

  openWebpage(url: string) {
    const browser = this.inAppBrowser.create(url);

    //browser.show();
  }
}
