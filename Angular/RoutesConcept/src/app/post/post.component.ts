import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute) {}
  id!:string;

  ngOnInit(): void {
     this.id =   this.activatedRoute.snapshot.params['id'];
  }
}
