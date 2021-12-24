import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SuccessComponent } from './components/success/success.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  {path:'add',component:AddUserComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:EditUserComponent,canActivate:[AuthGuard]},
  {path:'list',component:ListUserComponent,canActivate:[AuthGuard]},
  {path:'',component:LoginUserComponent},
  {path:'login',component:LoginUserComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'success',component:SuccessComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
