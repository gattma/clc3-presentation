import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren} from '@angular/core';
import {AnalyzeFile} from "../../models/AnalyzeFile";
import {PersistService} from "../../services/persist.service";
import {HttpEventType} from "@angular/common/http";
import {MatSnackBar} from "@angular/material";

//import {Image} from "../../models/Image";

@Component({
  selector: 'app-canvas-image',
  templateUrl: './canvas-image.component.html',
  styleUrls: ['./canvas-image.component.css']
})
export class CanvasImageComponent implements AfterViewInit {

  @Input('images') images: AnalyzeFile;

  @ViewChildren('canvas')
  canvas: QueryList<ElementRef<HTMLCanvasElement>>;

  constructor(
    private persistService: PersistService,
    private snackBar: MatSnackBar) {

  }


  ngAfterViewInit(): void {
    console.log(this.images);
    for (let i = 0; i < this.canvas.length; i++) {
      let canvas = this.canvas.toArray()[i].nativeElement;
      let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
      let imageData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log(imageData);
      imageData = this.eachPic(i, ctx, imageData, canvas.width, canvas.height);
      console.log(imageData);
      ctx.putImageData(imageData, 0, 0);

      console.log("Finished image " + i);
    }
  }

  eachPic(imageIndex: number, ctx: any, imageData: ImageData, width: number, height: number) {
    var imgdatalen = imageData.data.length;
    let image = this.images.processedImage.images[imageIndex];
    console.log("Image");
    console.log(imgdatalen);
    for (var i = 0; i < imgdatalen / 4; i++) {  //iterate over every pixel in the canvas
      let row = Math.floor(i / width);
      let col = Math.floor(i % width);
      if (row == 0 || row == 1) {
        console.log(col);
      }
      imageData.data[4 * i] = image[row][col][0];   // RED (0-255)
      imageData.data[4 * i + 1] = image[row][col][1];    // GREEN (0-255)
      imageData.data[4 * i + 2] = image[row][col][2];    // BLUE (0-255)
      imageData.data[4 * i + 3] = 255;  // APLHA (0-255)
    }
    return imageData;
  }

  persist() {
    this.persistService.persist(this.images)
      .subscribe(events => {
        if (events.type == HttpEventType.UploadProgress) {
          let progressValue = Math.round(events.loaded / events.total * 100);
          console.log(progressValue)
        } else if (events.type === HttpEventType.Response) {

          console.log("SUCCESS");
        }
      })
  }

  openSnackbar() {
    this.snackBar.openFromComponent(CanvasImageComponent, {
      duration: 5 * 1000,
    });
  }
}
