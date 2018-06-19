import { Component, OnInit ,Input} from '@angular/core';
import { DisplayService } from '../display.service';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
//import {Observable} from "rxjs/Observable";
import { SlideshowComponent }  from '../slideshow/slideshow.component';
import { UploadDisplayService } from '../upload-display.service';


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
  pdfSrc: string ;
  downlink : any = navigator.connection.downlink;
  images:string[];
  // @Input() baseStrings:string[] ;
  public slideComponent:boolean;
  public pdfcomponent;

  ngOnInit() {
    
  //console.log("HI**********************"+JSON.stringify(this.baseStrings));
    this.isDisabled();
    
    this.displayService.getImages()
      .then((data)=>{ 
          this. pdfSrc = data.pdfDetails.filenames;
          console.log(navigator.connection.downlink);
      });
    }

  isDisabled(){
  
    if(navigator.connection.downlink < 7){
      
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
  
}

 
