import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UploadDisplayService } from 'src/app/upload-display.service';

//import { UploadComponent } from './upload/upload.component';
//import { UploadDisplayService } from './upload-display.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  



  private url : string = 'https://newitexdev.accenture.com/PdfToImageAPI/fetch/?filename=';
  private Url : string= "https://newitexdev.accenture.com/PdfToImageAPI/fetchPDFList";
  fileName:string;

  constructor(private http:HttpClient,private uploadDisplayService: UploadDisplayService) { }
  
  getFilename():string{
    console.log("!!!!!!!!!!!!");
    return this.fileName;   
  }

  setFilename(fn : string):void{
    console.log("&&&&&&&&&&&&&");
    this.fileName = fn;
  }

  getImages(){
    return fetch(this.url+this.uploadDisplayService.getFileName())
      .then((response)=>{
        return response.json();
      });
  }

  getImages2(filename : string){
    return fetch(this.url+filename)
      .then((response)=>{
        return response.json();
      });
  }

  getPdfList(){
    return fetch(this.Url)
    .then((res)=>{
    return res.json();
    })
    // console.log(this.constfileName);
  }


}

