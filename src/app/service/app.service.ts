import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppService {

    constructor(private http: HttpClient){}

    get(url: string ){
        return this.http.get(url);
    }

    getOtherFormat(url: string, typeResponse: any){
        return this.http.get(url, {responseType: typeResponse});
    }
}