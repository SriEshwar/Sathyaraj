import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SizePipe } from './size.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SizePipe,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customPipe';
  // size:number=0
  name: string = ''
  genders: string[] = ['Male', 'Female']
  selectedGender: string = ''

}
