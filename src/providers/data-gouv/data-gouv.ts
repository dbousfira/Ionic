import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataGouvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataGouvProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataGouvProvider Provider');
  }

  getAll() {
    return this.http
        .get('https://geo.data.gouv.fr/api/geogw/services/5695511cb3a81842764d4be8/feature-types/bdt32:pdipr/download?format=GeoJSON&projection=WGS84');
  }

}
