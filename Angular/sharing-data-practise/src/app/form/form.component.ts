import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from "../list/list.component";

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [FormsModule, ListComponent]
})
export class FormComponent {
  @Output() rolesAdded:EventEmitter<string[]>=new EventEmitter
  roles : string[]=[]
  roleName=""
  addRole(){
    this.roles.push(this.roleName)
    this.roleName=""
    console.log(this.roles);
    this.rolesAdded.emit(this.roles)
  }

}
