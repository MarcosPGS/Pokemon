import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TemplateModule } from './core/template/template.module';
import { HomeModule } from './views/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateModule,
    HomeModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
