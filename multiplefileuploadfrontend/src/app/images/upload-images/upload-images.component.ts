
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ImagesService } from '../services/images.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  public files: File [] = [];

  constructor( private _images: ImagesService,  public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect (event: any): void {
    this.files.push (...event.addedFiles)
  }

  onRemove (event: any): void {
    this.files.splice (this.files.indexOf (event), 1);
  }

  uploadFiles () {

    const $self = this;
    this._images.uploadFiles (this.files).subscribe ((response: any) => {
      
      Swal.fire (
        'Saved',
        'Your Images has been saved',
        'success'
      ).then (() => {
        $self.router.navigate (['../list-images'], { relativeTo: $self.route });
      })

    }, (error) => {
      
      Swal.fire (
        'Cannot Save Images',
        `${error.message}`,
        'error'
      )

    })
    
  }

}
