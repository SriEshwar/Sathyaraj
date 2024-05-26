import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserListComponent,HttpClientModule]
})
export class AppComponent {
  title = 'HttpclientApp';
}
