import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColoumnOneComponent } from './layouts/coloumn-one/coloumn-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ColoumnOneComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ColoumnOneComponent 
  ]
})
export class SharedModule { }
