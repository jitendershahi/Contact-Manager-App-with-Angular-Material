import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const route:Routes = [
  {path:'contactmanager',loadChildren:'./contactmanager/contactmanager.module#ContactmanagerModule'},  
  {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'**',redirectTo:'contactmanager'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
