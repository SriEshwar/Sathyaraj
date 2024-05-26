import { Component, Input,OnChanges, SimpleChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges,OnInit,OnDestroy {
  // @Input() text=''
  @Input() text:string[]=[]
  noOfTexts=0; 

  ngOnInit(): void {        //we need to store all the data for components before loading
    // throw new Error('Method not implemented.');
    console.log('ngOnInit called!')
    this.text.push('Developer')
    this.noOfTexts=1;
  }
  ngOnChanges(changes: SimpleChanges): void {  //it wont support for array,object
    // throw new Error('Method not implemented.');
    // if(!changes['text'].isFirstChange()){
    //   console.log('you are modifying the original value')
    //   console.log("ngOnchanges called",changes['text'].currentValue)
    // }
       console.log("ngOnchanges called")
  }
  ngDoCheck():void{   //to check array values are changed 
    console.log('ngDoCheck called')
    if(this.text.length > this.noOfTexts){
      console.log('ngDoCheck called')
      console.log('you are modifying the original value')
      this.noOfTexts++;
    }
  }
  ngOnDestroy(): void {  //it is called when component is going to destroy
    console.log('ngOnDestroy called')
   //it used to destroy the component input data after deleting the component
  }
  
}
