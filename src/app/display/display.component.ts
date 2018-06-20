import { Component, OnInit ,Input} from '@angular/core';
import { DisplayService } from '../display.service';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
//import {Observable} from "rxjs/Observable";
import { SlideshowComponent }  from '../slideshow/slideshow.component';

import { UploadDisplayService } from '../upload-display.service';
import { Subscription } from 'rxjs';


declare var navigator;

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent implements OnInit {


  constructor(private displayService:DisplayService, 
              private http : HttpClient,
              private sanitizer: DomSanitizer,private uploadDisplayService: UploadDisplayService
              ) { 
               
  }
 
  pdfSrc : string;
  pdfFileSub : Subscription;
  downlink : any = navigator.connection.downlink;
  images:string[];
  public slideComponent:boolean;
  public pdfcomponent;

  ngOnInit() {
    this.isDisabled();    
    // this.displayService.getImages()
    //   .then((data)=>{ 
    //       this.pdfSrc = data.pdfDetails.location;
    //       console.log(navigator.connection.downlink);
    //   });
    this.pdfFileSub = this.displayService.fileNameSub.subscribe((fn)=>{
      this.pdfSrc = fn;
      console.log(fn);
    });
  }

  isDisabled(){
    if(navigator.connection.downlink < 1){
      this.pdfcomponent =  false;
      this.slideComponent=true;
    }
    else
    {
      
      this.pdfcomponent=true;
      this.slideComponent=false;
    }

    
  }

  
  cleanURL(oldURL ): SafeUrl{
    console.log(oldURL);
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);

  }
  
}

 
