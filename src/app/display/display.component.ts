import { Component, OnInit ,Input, OnDestroy} from '@angular/core';
import { DisplayService } from '../display.service';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { SlideshowComponent }  from '../slideshow/slideshow.component';
import { UploadDisplayService } from '../upload-display.service';
import { Subscription } from 'rxjs';


declare var navigator;

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent implements OnInit,OnDestroy {


  constructor(private displayService:DisplayService, 
              private http : HttpClient,
              private sanitizer: DomSanitizer,private uploadDisplayService: UploadDisplayService
              ) { 
               
  }
 
  toggleSlideShow : boolean = false;
  pdfSrc : string;
  pdfFileSub : Subscription;
  downlink : any = navigator.connection.downlink;
  images:string[];
  public slideComponent:boolean;
  public pdfcomponent;
  pdfSize :number;
  
  ngOnInit() {
    console.log(navigator.connection.downlink);
    //this.isDisabled();    

    this.pdfFileSub = this.displayService.fileNameSub.subscribe((fn)=>{
      this.pdfSrc = fn;

    });
   
    

  }
  toggleSlideshow(pdfSize){
    this.toggleSlideShow = true;
    this.pdfSize=pdfSize;
    this.isDisabled(pdfSize);
  }
  backToList(){
    this.toggleSlideShow = false;
  }
  isDisabled(fileSize : number){
  // console.log(fileSize);
  let timeinSec= fileSize/ (131072* navigator.connection.downlink)
console.log(timeinSec)
    if(timeinSec >=5)
  {
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
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
     }
  
   ngOnDestroy(){
    this.pdfFileSub.unsubscribe();
  }
}

 
