import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListImagesComponent } from './list-images/list-images.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'upload-images', component: UploadImagesComponent
      },
      {
        path: 'list-images', component: ListImagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
