import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../foto.model';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent  implements OnInit {

  constructor(public fotoService: FotoServiceService) { }

  ngOnInit() {}

  public fotos: Foto[] = this.fotoService.fotos;


  tomarFoto() {
    this.fotoService.addNewToGallery();
  }

}
