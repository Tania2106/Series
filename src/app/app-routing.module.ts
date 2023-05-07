import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';




const routes: Routes = [
  {
    path: '', redirectTo: '/comics', pathMatch: 'full'
  },
  {
    path: 'comics', component: ComicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
