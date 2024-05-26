import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormComponent, ListComponent]
})
export class AppComponent {
  title = 'sharing-data-practise';
}
