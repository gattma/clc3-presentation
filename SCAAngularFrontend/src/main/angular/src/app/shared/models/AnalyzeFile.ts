import {Image} from "./Image";

export class AnalyzeFile {
  file: File;
  processedImage: Image;
  loading: boolean = false;

  constructor(file: File){
    this.file = file;
  }
}
