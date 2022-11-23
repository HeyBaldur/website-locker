import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard.module.routes';
import { NavigationModule } from 'src/app/shared/navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    DashboardRoutingModule,
    NavigationModule
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
  ]
})
export class DashboardModule { }
