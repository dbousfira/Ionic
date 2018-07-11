import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ListPage} from "../list/list";

@Component({
  selector: 'page-home',
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class HomePage {

    rootPage = ListPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
