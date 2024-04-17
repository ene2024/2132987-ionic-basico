import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Alumno } from '../alumno.model'; 


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  alumnos: Alumno []= [
    {nombre: 'Carlos', favorito: false},
    {nombre: 'Ximena', favorito: false},
    {nombre: 'Alberto', favorito: false}, 
    {nombre: 'Barbara', favorito: false},
    {nombre: 'Georgina', favorito: false},
    {nombre: 'Kevin', favorito: false}
  ];

  toggleFavorito(alumno: Alumno): void {
    alumno.favorito = !alumno.favorito;
  }

  constructor(private actionSheetController: ActionSheetController) { }

  async mostrarActionSheet(alumno: Alumno) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Eliminar Alumno',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close'
        },
        {
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eliminarAlumno(alumno);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  eliminarAlumno(alumno: Alumno) {
    const index = this.alumnos.indexOf(alumno);
    if (index > -1) {
      this.alumnos.splice(index, 1);
    }
  }



  ngOnInit() {}

}
