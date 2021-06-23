import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantComponent } from './components/accountant/accountant.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AdminComponent } from './components/admin/admin.component';
import { DueFeesComponent } from './components/due-fees/due-fees.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AccountantHomeComponent } from './components/accountant-home/accountant-home.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { LoginComponent } from './components/login/login.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { AddAccountantComponent } from './components/add-accountant/add-accountant.component';
import { ViewAccountantComponent } from './components/view-accountant/view-accountant.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditAccountantComponent } from './components/edit-accountant/edit-accountant.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'accountant',component:AccountantComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'accountant-home',component:AccountantHomeComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'add-accountant',component:AddAccountantComponent},
  {path:'view-student',component:ViewStudentComponent},
  {path:'view-accountant',component:ViewAccountantComponent},
  {path:'due-fees',component:DueFeesComponent},
  {path:'login',component:LoginComponent},
  {path:'log-out',component:LogOutComponent},
  {path:'edit-student',component:EditStudentComponent},
  {path:'edit-accountant',component:EditAccountantComponent},
  {path:'search-student',component:SearchStudentComponent}  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
