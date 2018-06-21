import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DisplayService } from '../display.service';
import { UploadDisplayService } from '../upload-display.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  private imagefileNames:string[]=[];
  private selectedImage:string;
  private imageIndex:number=0;
  slide:number=1;
  totalSlides:number;
  imageLocationsSub : Subscription;
  
  constructor(private displayService :DisplayService,
              private uploadDisplayService : UploadDisplayService) { }
  ngOnInit() {    
          this.imageLocationsSub = this.displayService.imageLocationsSub.subscribe((images)=>{
            this.imagefileNames = images;
            this.selectedImage = this.imagefileNames[0];
            this.totalSlides = this.imagefileNames.length;
          });

          // this.imagefileNames=[
            //   "../assets/data/download (1).jpeg",
            //   "../assets/data/download (2).jpeg",
            //   "../assets/data/download (3).jpeg",
            //   "../assets/data/download (4).jpeg"
            // ];

            //this.isDisabled();
            
 
   /* this.displayService.getImages()
      .then((data)=>{    
        this.imagefileNames = data.pdfDetails.images;
          this.selectedImage = this.imagefileNames[this.imageIndex];
          this.totalSlides = this.imagefileNames.length;
      
          }); */
      
  }
  
  
  prev(){
    this.imageIndex=this.imageIndex-1;
    this.selectedImage=this.imagefileNames[this.imageIndex];
    console.log(this.selectedImage);
    this.slide--;
  }
  next (){
    this.imageIndex = this.imageIndex+1;
    this.selectedImage=this.imagefileNames[this.imageIndex];
    console.log(this.selectedImage);
    this.slide++;
   
  }
  ngOnDestroy(){
    this.imageLocationsSub.unsubscribe();
  }
  
}


  
