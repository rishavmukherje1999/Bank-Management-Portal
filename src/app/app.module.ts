import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ChartTimeComponent } from './chart-time/chart-time.component';
import { ChartIssueComponent } from './chart-issue/chart-issue.component';
import { AccumulationChartModule, AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService, PieSeriesService } from '@syncfusion/ej2-angular-charts';
import { AdminwelcomeComponent } from './adminwelcome/adminwelcome.component';
import { RegistersuccesspageComponent } from './registersuccesspage/registersuccesspage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { IssueoneComponent } from './issueone/issueone.component';
import { IssuetwoComponent } from './issuetwo/issuetwo.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    LoginUserComponent,
    RegisterUserComponent,
    ListUserComponent,
    SuccessComponent,
    HomeComponent,
    ChartTimeComponent,
    ChartIssueComponent,
    AdminwelcomeComponent,
    RegistersuccesspageComponent,
    AdminloginComponent,
    AddemployeeComponent,
    IssueoneComponent,
    IssuetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AccumulationChartModule
  ],
  providers: [
  PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
