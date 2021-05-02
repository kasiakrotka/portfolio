import { Component } from '@angular/core';
import { Project } from './models/project.model';
import { Strings } from './models/strings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  projectsArray: Project[];
  projectsNum: number; 
  strings: any;
  stringsObj: Strings; 

  constructor(){
    this.stringsObj = new Strings(); 
    this.strings  = this.stringsObj.pl;
    this.projectsArray = this.stringsObj.projects_pl;
    this.projectsNum = this.projectsArray.length;
    console.log(this.projectsArray);
  }

  onSwitchLang(lang: string){
    if(lang == 'PL')
    {
      this.strings = this.stringsObj.pl;
      this.projectsArray = this.stringsObj.projects_pl;
    }

    if(lang == 'ENG')
    {
      this.strings = this.stringsObj.eng;
      this.projectsArray = this.stringsObj.projects_eng;
    }
  }

}
