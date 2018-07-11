import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from "../activity/activity";

import { Rando } from "../../app/models/Rando";
import { Step } from "../../app/models/Step";


@Component({
    templateUrl: 'details.html'
})
export class DetailsPage {
    rando: Rando;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.rando = new Rando(this.navParams.get('title'));
        this.rando.steps = this.navParams.get('steps');
    }

    showDetails(rando) {
        this.navCtrl.push(ActivityPage, rando);
    }
}
