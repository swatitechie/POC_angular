import { Component, OnInit, Input, OnDestroy,EventEmitter,Output } from '@angular/core';
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
  @Output() toggleList = new EventEmitter();

  constructor(private displayService :DisplayService,
              private uploadDisplayService : UploadDisplayService) { }
  ngOnInit() {    
          this.imageLocationsSub = this.displayService.imageLocationsSub.subscribe((images)=>{
            this.imagefileNames = images;
            this.selectedImage = this.imagefileNames[0];
            this.totalSlides = this.imagefileNames.length;
            this.slide=1;
          });
  }

  backToList(){
    this.toggleList.emit();
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


  
