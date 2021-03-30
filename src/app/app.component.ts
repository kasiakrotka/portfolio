import { Component } from '@angular/core';
import { Project } from './project/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  projectsArray: Project[];
  projectsNum: number; 

  constructor(){
    this.projectsArray = new Array(); 
    this.projectsArray.push(new Project("Quiz","Simple quiz application with simple design and graph of given answers", "#", ['HTML', 'CSS', 'JavaScript'], "assets/quiz.png" ));
    this.projectsArray.push(new Project("Mood Tracker","Application let user track his mood through the month. The purpose of app is therapeutic. User have a chance to fill fomrs which help him describe his day. Data collected in the app can be displayed as a graph.", "#", ['HTML', 'CSS', 'JavaScript', 'Angular'], "assets/moodtracker.png" ));
    this.projectsNum = this.projectsArray.length;
  }

}
