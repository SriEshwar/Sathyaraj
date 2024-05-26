import { CommonModule } from '@angular/common';
import { createInjectableType } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  contactForm=new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('^[a-zA-Z]+$')]), //validating
    lastName : new FormControl(''
      // {value:'Raj',disabled:false}
      ,[Validators.required,Validators.maxLength(15),Validators.pattern('^[a-zA-Z]+$')]),
    email : new FormControl("",[Validators.required]),
    gender : new FormControl("",[Validators.required]),
    isMarried : new FormControl("",[Validators.requiredTrue]),
    country : new FormControl("",[Validators.required]),
    address:new FormGroup({
      street : new FormControl("",[Validators.required]),
      city : new FormControl("",[Validators.required]),
      pincode : new FormControl("",[Validators.required])
    })
  })

  onSubmit(){
    console.log(this.contactForm.value)
  }

  get firstname(){
    return this.contactForm. get('firstName')
  }
  get lastname(){
    return this.contactForm.get('lastName')
  }
  get email(){
    return this.contactForm.get('email')
  }
  get gender(){
    return this.contactForm.get('gender')
  }
  get marriedstatus(){
    return this.contactForm.get('isMarried')
  }
  get country(){
    return this.contactForm.get('country')
  }
  get street(){
    return this.contactForm.get('address')?.get('street')
  }
  get city(){
    return this.contactForm.get('address')?.get('city')
  }
  get pincode(){
    return this.contactForm.get('address')?.get('pincode')
  }

}
