import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from "../details/details";
import { Rando } from "../../app/models/Rando";
import { Step } from "../../app/models/Step";
import { DataGouvProvider } from "../../providers/data-gouv/data-gouv";


@Component({
    templateUrl: 'list.html'
})
export class ListPage {

    rando: Rando;
    randos: Rando[] = [];

    detailsPage = DetailsPage;

    constructor(public navCtrl: NavController, public navParams: NavParams, public dataGouvService: DataGouvProvider)  {

        dataGouvService.getAll().subscribe(data => {
            for (let hiking of data.features) {

                this.rando = new Rando(hiking.properties.NOM_COMM);
                for (let step of hiking.geometry.coordinates) {
                    this.rando.steps.push(new Step(step[0], step[1]));
                }

                this.randos.push(this.rando);
            }
        });
    }

    showDetails(rando) {
        this.navCtrl.push(DetailsPage, rando);
    }

}
