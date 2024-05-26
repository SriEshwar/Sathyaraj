import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productdet',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './productdet.component.html',
  styleUrl: './productdet.component.css'
})
export class ProductdetComponent {
  productsdata:any

  constructor(private service:ProductService){ }

  ngOnInit(){
    this.service.getAllProducts().subscribe((data)=>{
      // console.log(data)
      this.productsdata=data
      console.log('fetched')
    })
  }
}
