import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragDropDirective]'
})
export class DragDropDirectiveDirective {

  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') background = '#f5fcff';
  @HostBinding('style.opacity') opacity = '1';

  // Dragover Listener
  @HostListener('dragover', ['$event']) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8';
  }

  // Drop Listener
  @HostListener('drop', ['$event']) public onDrop(event){
    event.preventDefault();
    event.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
    let files = event.dataTransfer.files;
    if(files.length > 0){
      this.onFileDropped.emit(files);
    }
  }

  constructor() { }

}
