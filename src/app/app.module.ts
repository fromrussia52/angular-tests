import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './about/page1/page1.component';
import { Page2Component } from './about/page2/page2.component';
import { LoginComponent } from './login/login.component';
import {LoggerService} from './logger.service';
import { FactorialPipe } from './factorial.pipe';

const itemRoutes: Routes = [
  { path: 'page1', component: Page1Component},
  { path: 'page2', component: Page2Component},
];

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'about', component: AboutComponent, children: itemRoutes},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    LoginComponent,
    FactorialPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
