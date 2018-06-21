import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from './constant.service';
import { HttpClientModule } from '@angular/common/http';
import{observable, Observable} from'rxjs';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Connection } from '@angular/http';
import { UploadComponent } from './upload/upload.component';

var navigator:any;


@Injectable({
  providedIn: 'root'
})
export class UploadDisplayService {
  base64FilesString: string[];
  responceBase64:string[];
  fileName:string;
 // URLString is a variable which store the varible url
  URLString: string =  "PdfToImageAPI/file";
  
  constructor(private httpClient : HttpClient,private constantService : ConstantService) { }
 
  // posting base64 format files over url
  postApi(url, base64FilesString, fileName) {
    this.fileName=fileName;
    console.log(base64FilesString);
    //apiUrl variable stores one changable url(url) and constand/public url(URLString) 
      let apiUrl=url+this.URLString;
      let requestPayload={
          "filename":fileName,
          "binary":base64FilesString[0].split(",")[1]
      };
    console.log(fileName);
    
    return this.httpClient.post(apiUrl,requestPayload);
  
  }
  getFileName():string{
    return this.fileName;
  }
  
    


  logNetworkInfo() {
     
    }
    
 
 
  }
  
  
  