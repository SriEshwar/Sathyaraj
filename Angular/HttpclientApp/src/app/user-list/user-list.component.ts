import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl("")
  });

  constructor(private http: HttpClient) {}

  users: User[] = [];

  ngOnInit() {
    this.getUsers().subscribe((response) => {
      console.log('Response:', response);
      this.users = response;
    });
  }

  getUsers() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users"); //It returns observable data and we can declare what type of data we want
  }

  onSubmit() {
    this.addUser().subscribe((response) => {
      this.users.push(response);   //after posting the value in the json we need to push the value into the current json also
      this.userForm.reset();      
    });
  }

  addUser() {
    const user = {
      name: this.userForm.get('name')?.value,
      email: this.userForm.get('email')?.value
    };
    return this.http.post<User>("https://jsonplaceholder.typicode.com/users", user);
  }
}

class User {
  name!: string;  //initially we dont assign so we use exclamatory
  email!: string;
}
