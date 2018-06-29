import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DisplayService } from '../display.service';
import { HttpClient } from '@angular/common/http';
import { UploadDisplayService } from '../upload-display.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() slideshowMode =  new EventEmitter();

  private pdfDetails=[];
  pdfSize:number;

  constructor(private displayService:DisplayService,
              private uploadDisplayService : UploadDisplayService ,
              private http : HttpClient) {  }
    

  ngOnInit() {
    this.displayService.getPdfList()
      .then((data)=>{
        this.pdfDetails=data.pdfDetails;
        this.pdfDetails = data.pdfDetails.PDFList;
        let pdfname: any= [];
        this.pdfDetails.forEach((name) => {
          if(name.indexOf('.pdf') > 0){
            pdfname.push(name);
          }
        });
        this.pdfDetails = pdfname;
  
        });
    }
  
  selectfile(pdf){
    this.uploadDisplayService.fileName = pdf;
    this.displayService.getPdf(pdf)
      .then((data)=>{ 
        this.pdfSize=data.pdfDetails.size;
        this.displayService.setFilename(data.pdfDetails.location);
        this.displayService.setImageLocations(data.pdfDetails.images);
        this.slideshowMode.emit(data.pdfDetails.size);  
      });

  }
}
