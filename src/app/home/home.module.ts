import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReposServiceService } from './repos-service.service';
import { ProjectElementModule } from '../project-element/project-element.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

];
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ProjectElementModule
  ],
  providers: [ReposServiceService]
})
export class HomeModule { }
