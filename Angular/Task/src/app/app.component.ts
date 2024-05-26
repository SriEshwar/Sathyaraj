import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ProductComponent } from './product/product.component';
import { ProductdetComponent } from "./productdet/productdet.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, AccountComponent, ProductComponent, RouterLink, ProductdetComponent,HttpClientModule]
})
export class AppComponent {
  title = 'Task';
}
