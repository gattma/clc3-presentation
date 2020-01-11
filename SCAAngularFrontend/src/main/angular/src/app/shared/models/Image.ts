export class Image {
  images: Array<Array<Array<Array<number>>>>;
  labels: Array<string>;
  workflow: string;
}

export class ImgWithUser {
  images: Array<Array<Array<Array<number>>>>;
  labels: Array<string>;
  workflow: string;
  userId: string;


  constructor(image: Image, userId: string) {
    this.images = image.images;
    this.labels = image.labels;
    this.workflow = image.workflow;
    this.userId = userId;
  }
}
