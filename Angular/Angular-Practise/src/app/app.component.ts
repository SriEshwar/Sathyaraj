import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TrimPipe } from "./trim.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // template:"<h1>{{fullName}}</h1>",
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, TrimPipe]
})
export class AppComponent {
  fullName="Sathyaraj"

  getName(){
    return "Software"
  }
  title="Home"
  clickCount=0
  clickCount1=0
  clickMe(){
    this.clickCount++;
  }
  value=''
  handleInput(event:any){
    this.value=(event.taget as HTMLInputElement).value
  }

  roles=[
    'Developer','Tester',
    'TeamLead','UI/UX','Manager'
  ]
  showMe=true
  applyColor=true
  date=new Date()
  message='Welcome to Angular'

}
