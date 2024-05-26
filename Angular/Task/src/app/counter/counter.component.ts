import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count=0;
  increment(){
    this.count++;
  }
  decrement(){
    if(this.count>0){
    this.count--;}
  }
}
