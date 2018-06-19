import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadDisplayService } from '../upload-display.service'
import { ConstantService } from '../constant.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

declare var navigator;


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // @ViewChild('onUploadFile')
  // fileName : ElementRef
  constructor(private uploadDisplayService: UploadDisplayService,
    private constantService: ConstantService,
    private router: Router,
   
    ) { }
  @ViewChild('fileInput') fileInput;

  //files array for pdf files array
  //base64FileString for base64 format file
  files: any[];
  base64FilesString: string[];
  data: any;
  spinner: boolean =false;//by default we are taking spinner false 
  success: boolean = false;
   baseString:string[];

  ngOnInit() {
  }
  
//for adding file uploadFile() is used & after adding file one by one selected file pushed in the file array 
  uploadFile() {
    let file = this.fileInput.nativeElement.files[0];
    if (this.files == undefined) {
      this.files = [];
      this.files.push(file);
    } else {
      this.files.push(file);
    }
  }
  
   
  //for uploading files uploadFiles() is used,//url=variable where we store the url which is in constandService,//promises=variable which stores all the promises(resolve/request)
//promise.all() using for converting multiple promises into multiple base64strings/data.
//then() is used for geting result
//using postApi for posting base64 string(data) over url
 

uploadFiles() {
  let url = this.constantService.url;
   let promises = this.convertIntoBase64(this.files);
    Promise.all(promises).then((requestPayload) => {


        this.spinner =true;//before geting response
        this.uploadDisplayService.postApi(url, requestPayload).subscribe((res) => {
         console.log(res);
      
        this.spinner=false ; //after geting response
        //this.router.navigate(['display']);
        
        this.success = true;
        console.log(res);
        
      });

    });
  }
//  removeFile() is used removing file from array and splice(i,1/2) method is used for removing  1/2 file from indexwise
  
removeFile(i) {
    console.log(i);
    this.files.splice(i, 1)
    console.log(this.files)
  }

//convertIntoBase64() convert all the files from files array convert into promises and all promises are pushed in promises[]

  convertIntoBase64(files): Promise<string>[] {
    let promises: Promise<string>[] = [];
    for (let i = 0; i <= files.length - 1; i++) {
      promises.push(this.getBase64(files[i]));
    }
    return promises;
  }
// getBase64() processed all the promises either in resolve, reject  by onload and onerror method.
  getBase64(file) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  

  
}


