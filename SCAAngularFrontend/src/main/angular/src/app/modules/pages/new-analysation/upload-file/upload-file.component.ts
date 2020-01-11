import {Component, OnInit, Sanitizer} from '@angular/core';
import {FileUploadService} from "../../../../shared/services/file-upload.service";
import {HttpEventType} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {Image} from "../../../../shared/models/Image";
import {AnalyzeFile} from "../../../../shared/models/AnalyzeFile";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  uploadView = true;
  currentFile: Image = null;

  files: AnalyzeFile[] = [];
  previewUrl: any;
  isUploading = false;
  progressValue = 0;


  constructor(
    private fileUploadService: FileUploadService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  uploadFile(event){
    this.preview(event[0]);
    for(let index = 0; index < event.length; index++){
      const element = event[index];
      this.files.push(new AnalyzeFile(element));
    }
  }

  preview(file: File){
    // Show Preview
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    }
  }

  deleteAttachment(index){
    this.files.splice(index, 1);
  }

  submit(fileData: File, index: number){
    this.files[index].loading = true;
    this.fileUploadService.submitAll(fileData)
      .subscribe(events => {
        if(events.type == HttpEventType.UploadProgress){
          this.isUploading = true;
          this.progressValue = Math.round(events.loaded / events.total * 100);
          console.log(this.progressValue)
        } else if(events.type === HttpEventType.Response){
          this.isUploading = false;
          this.progressValue = 0;
          this.files[index].loading = false;
          let img: Image = <Image>events.body;
          this.files[index].processedImage = img;
          console.log("SUCCESS");
        }
      })
  }

  toggleView(analyzeImage: Image){
    if(this.uploadView){
      // Change view to File View
      this.currentFile = analyzeImage;
      this.uploadView = false;
    } else {
      // Change view to Upload View
      this.currentFile = analyzeImage;
      this.uploadView = true;
    }
  }
}
