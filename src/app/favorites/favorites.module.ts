import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectElementModule } from '../project-element/project-element.module';
import { AuthGuard } from '../guards/login/auth.guard';
import { LoginComponent } from '../guards/login/login/login.component';
import { LoginModule } from '../guards/login/login/login.module';


const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProjectElementModule,
    LoginModule
  ],
})
export class FavoritesModule { }
