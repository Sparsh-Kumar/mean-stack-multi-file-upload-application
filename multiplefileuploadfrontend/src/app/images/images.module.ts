
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ImagesRoutingModule } from './images-routing.module';

import { ImagesComponent } from './images.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { ListImagesComponent } from './list-images/list-images.component';

import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    ImagesComponent,
    UploadImagesComponent,
    ListImagesComponent
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    ImagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ImagesModule { }
