import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeModule } from './home/home.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './guards/login/login/login.component';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginModule } from './guards/login/login/login.module';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  bootstrap: [AppComponent],
  // entryComponents:[LoginComponent]
})
export class AppModule { }
