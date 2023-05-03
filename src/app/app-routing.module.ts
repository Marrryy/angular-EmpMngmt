import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add/add.component';
import { DetailEmpComponent } from './employee/detail/detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', title: 'Login',  component: LoginComponent },
  { path: 'employee', title: 'Employee List', component: EmployeeComponent,
    // children: [
    //   {
    //     path: 'add',
    //     title: 'Add Employee',
    //     component: AddEmployeeComponent,
    //   },
    //   {
    //     path: 'detail/:id',
    //     title: 'Detail Employee',
    //     component: DetailEmpComponent,
    //   },
    // ],
    canActivate: [AuthGuard]
  },
  { path: 'employee/add',
    title: 'Add Employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'employee/detail/:id',
    title: 'Detail Employee',
    component: DetailEmpComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: EmployeeComponent }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
