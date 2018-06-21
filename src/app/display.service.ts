import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UploadDisplayService } from 'src/app/upload-display.service';
import { BehaviorSubject } from 'rxjs';

//import { UploadComponent } from './upload/upload.component';
//import { UploadDisplayService } from './upload-display.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private url : string = 'https://newitexdev.accenture.com/PdfToImageAPI/fetch/?filename=';
  private Url : string= "https://newitexdev.accenture.com/PdfToImageAPI/fetchPDFList";
  private fileName = new BehaviorSubject<string>('');
  fileNameSub = this.fileName.asObservable();
  
  
  
  constructor(private http:HttpClient,private uploadDisplayService: UploadDisplayService) { }
  
  // getFilename():string{    
  //   return this.fileName.getValue();   
  // }

  setFilename(fn : string):void{    
    this.fileName.next(fn);
  }
  // setImageName(FIn:string):void{
  //   this.fileName.next(FIn)
  // }

  getImages(){
    return fetch(this.url+this.uploadDisplayService.getFileName())
   .then((response)=>{
        return response.json();
      });
     
  }


  getPdf(filename : string){
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

