
import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  public imagesData: any [] = [];

  constructor(private _image: ImagesService) { }

  ngOnInit(): void {

    this.listFiles ();

  }

  listFiles () {
    
    const $self = this;
    this._image.listFiles ().subscribe ((response: any) => {
      
      $self.imagesData = response.imagesData;
      console.log ($self.imagesData);

    }, (error) => {
      Swal.fire (
        'Error !',
        'Cannot get images',
        'error'
      )
    })

  }

}
