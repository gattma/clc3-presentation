import { Component, OnInit } from '@angular/core';
import {Image} from "../../../shared/models/Image";
import {PersistService} from "../../../shared/services/persist.service";
import {AnalyzeFile} from "../../../shared/models/AnalyzeFile";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  images: Array<Image>;
  currentFile: Image;

  constructor(
    private persistService: PersistService
  ) { }

  ngOnInit() {
    this.persistService.getAll()
      .subscribe((imgs: Array<Image>) => {
        this.images = imgs;
      })
  }

  viewImage(image: Image){
    this.currentFile = image;
  }

}
