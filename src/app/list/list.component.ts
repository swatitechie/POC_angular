import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pdfSrc;
  private pdfDetails=[];

  constructor(private displayService:DisplayService, 
    private http : HttpClient) {  }
    

  ngOnInit() {
    this.displayService.getPdfList()
    .then((data)=>{
      this.pdfDetails=data.pdfDetails;
     });
  }
  
  selectfile(pdf){
    this.displayService.getImages2(pdf)
    .then((data)=>{ 
      this.pdfSrc = data.pdfDetails.location;
      this.displayService.setFilename(data.pdfDetails.location);  
    });
    

  }


}
