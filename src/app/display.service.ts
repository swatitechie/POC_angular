import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  
  
  private url : string = "https://newitexdev.accenture.com/PdfToImageAPI/fetch/?filename=sample_test2.pdf";
 

  constructor(private http:HttpClient) {}
  getImages(){

    return fetch(this.url)
      .then((response)=>{
        return response.json();
      });
  }
}

