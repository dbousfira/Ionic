import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'activity.html'
})
export class ActivityPage {
    
    lat: number;
    lng: number;
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

}
