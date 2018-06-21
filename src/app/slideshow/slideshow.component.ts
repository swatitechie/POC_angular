import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from '../display.service';
import { UploadDisplayService } from '../upload-display.service';



@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  private imagefileNames:string[]=[];
  private selectedImage:string;
  private imageIndex:number=0;
  slide:number=1;
  totalSlides:number;

  
  constructor(private displayService :DisplayService) { }
  ngOnInit() {
  
          // this.imagefileNames=[
            //   "../assets/data/download (1).jpeg",
            //   "../assets/data/download (2).jpeg",
            //   "../assets/data/download (3).jpeg",
            //   "../assets/data/download (4).jpeg"
            // ];

            //this.isDisabled();
            
 
    this.displayService.getImages()
      .then((data)=>{    
        this.imagefileNames = data.pdfDetails.images;
          this.selectedImage = this.imagefileNames[this.imageIndex];
          this.totalSlides = this.imagefileNames.length;
      
          });
      
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

  
}


  
