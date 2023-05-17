import {Component} from "@angular/core"

@Component({
  selector: 'app-counter',
  template: `
  <p>{{ counter }}</p>

<button (click)="aumentar(1)">+1</button>
<button (click)="aumentar(-1)">-1</button>
<hr />
<button (click)="reset()">Reset</button>


  `

})
export class CounterComponet {
    public title:string = 'Hola';
  public counter:number = 10;

  //metodo de aumentar
  // (value: number) aumenta dependiendo del valor que recibo
 aumentar( value: number):void{
  this.counter += value;

 }
//Metodo reset
 reset():void{
  this.counter = 10;
 }


}
