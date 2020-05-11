import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/login/auth.guard';
import { LoginComponent } from './guards/login/login/login.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'',
    children: [
      {
        path: 'home', 
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'favorites',
        loadChildren: './favorites/favorites.module#FavoritesModule',
      
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
