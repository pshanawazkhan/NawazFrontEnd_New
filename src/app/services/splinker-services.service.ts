import { Injectable } from '@angular/core';
import { Splinkers } from '../Class/splinkers';
import { Urls } from '../Class/Urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SplinkerServicesService {

  constructor(private http:HttpClient) { }

  //spl :Splinkers[] =[{"splid":1,"name":"pvc","cprice":46},{"splid":2,"name":"fg","cprice":464},];

       

    getBooksDetailsDetails(){


      //
      
     return this.http.get(Urls.splinkersget); 
      
    }
    
    addDetails(){

    
   //this.http.post();

    }





}
