import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import {A11yModule} from '@angular/cdk/a11y';
//import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    //A11yModule
    //AddAccountantComponent,
    //AddStudentComponent,
    //AdminComponent,
    ///AccountantComponent,
    //AdminHomeComponent,
    //AccountantHomeComponent,
    //DueFeesComponent,
    //EditAccountantComponent,
    //EditStudentComponent,
   // HomeComponent,
   // LoginComponent,
   /// LogoutComponent,
   // SearchStudentComponent,
   // ViewAccountantComponent,
    //ViewStudentComponent,
    //AuthroutingComponents,
   // HeaderComponent,
    //ColumnOneComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    DataTablesModule,
    //ReactiveFormsModule,
    //FormsModule,
    HttpClientModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
