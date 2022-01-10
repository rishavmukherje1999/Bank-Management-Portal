import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { ChartIssueComponent } from './chart-issue/chart-issue.component';
import { ChartTimeComponent } from './chart-time/chart-time.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SuccessComponent } from './components/success/success.component';
import { AdminGuard } from './shared/admin.guard';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {path:'add',component:AddUserComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:EditUserComponent,canActivate:[AuthGuard]},
  {path:'list',component:ListUserComponent,canActivate:[AuthGuard]},
  {path:'',component:LoginUserComponent},
  {path:'login',component:LoginUserComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'success',component:SuccessComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'issue',component:ChartIssueComponent,canActivate:[AuthGuard]},
  {path:'time',component:ChartTimeComponent,canActivate:[AuthGuard]},
  {path:'adminwelcome',component:AdminwelcomeComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'adminlogin',component:AdminloginComponent,canActivate:[AuthGuard]},
  {path:'bind',component:AddemployeeComponent,canActivate:[AuthGuard,AdminGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
