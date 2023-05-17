import { NgModule } from "@angular/core";
import { CounterComponet } from "./components/counter/counter.component";




@NgModule({
  declarations: [
    CounterComponet
  ],
  //Esto sirve para decirle que puede ser exportado para afuera de este modulo decirle al mundo exterior que puede consumir este counterComponent
  exports: [
    CounterComponet
  ]
})
export class CounterModule {

}
