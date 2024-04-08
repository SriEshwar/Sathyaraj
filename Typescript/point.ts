export class Point{
    /* private x:number;                           // we need to give access modifier so that no can use this
     private y:number;
     private z:number;    
     constructor(x?:number,y?:number,z?:number){  //if we give this ( ? ) symbol we can neither give nor leave this number parameter
         this.x=x;
         this.y=y;
         this.z=z;
     }*/
 
     constructor(private x?:number,public y?:number,public z?:number){   //we can use this method to simplify the code
     }
     private draw=():any=> {                //The return type of the function we given as any
         console.log('X = '+this.x+',Y = '+this.y+',Z = '+this.z);
     }
 
     drawTriangle=():any=>{
         this.draw();
     }
 }