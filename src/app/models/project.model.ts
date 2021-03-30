export class Project {
  title: string; 
  description: string; 
  url: string; 
  technologiesArray: string[];
  imgUrl: string;

  constructor(title: string, description: string, url: string, technologies: string[], imgUrl: string)
  {
    this.title = title; 
    this.description = description; 
    this.url = url;
    this.technologiesArray = technologies; 
    this.imgUrl = imgUrl;
  }
 }
