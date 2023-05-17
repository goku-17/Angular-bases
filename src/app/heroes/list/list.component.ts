import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  public heroNames: string[] = [ 'Spiderman','Batman','ironMan','SuperMan'];
  public deletedHero?: string;

  //Metodo de elimar heroe
// el pop es un metodo de arreglo que elimina el ultimo elemnto de la lista
  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();


  }


}
