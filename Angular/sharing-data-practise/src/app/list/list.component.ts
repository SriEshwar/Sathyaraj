import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [CommonModule, FormComponent]
})
export class ListComponent {
  /* @Input('rolesInput') */ roles : string[] =[]
  rolesDataUpdated(rolesData:string[]){
    this.roles=rolesData
  }
}
