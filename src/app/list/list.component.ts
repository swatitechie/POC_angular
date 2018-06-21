import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { HttpClient } from '@angular/common/http';
import { UploadDisplayService } from '../upload-display.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 // pdfSrc;
  private pdfDetails=[];

  constructor(private displayService:DisplayService,
    private uploadDisplayService : UploadDisplayService ,
    private http : HttpClient) {  }
    

  ngOnInit() {
    this.displayService.getPdfList()
    .then((data)=>{
      this.pdfDetails=data.pdfDetails;
     });
  }
  
  selectfile(pdf){
    this.uploadDisplayService.fileName = pdf;
    this.displayService.getPdf(pdf)
    .then((data)=>{ 
     // this.pdfSrc = data.pdfDetails.location;
      this.displayService.setFilename(data.pdfDetails.location);
      this.displayService.setImageLocations(data.pdfDetails.images)  
    });
    

  }


}
