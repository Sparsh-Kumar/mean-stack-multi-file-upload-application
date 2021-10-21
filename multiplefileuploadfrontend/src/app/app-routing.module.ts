import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'image/upload-images', pathMatch: 'full'
  },
  {
    path: 'image', loadChildren: () => import ('./images/images.module').then ((m) => m.ImagesModule)
  },
  {
    path: '**', redirectTo: 'image/upload-images', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
