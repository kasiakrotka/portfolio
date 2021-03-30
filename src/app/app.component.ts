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

  constructor(){
    this.strings  = (new Strings()).pl;
    this.projectsArray = (new Strings()).projects_pl;
    this.projectsNum = this.projectsArray.length;
  }

  onSwitchLang(lang: string){
    if(lang == 'PL')
    {
      this.strings = (new Strings()).pl;
      this.projectsArray = (new Strings()).projects_pl;
    }

    if(lang == 'ENG')
    {
      this.strings = (new Strings()).eng;
      this.projectsArray = (new Strings()).projects_eng;
    }
  }

}
