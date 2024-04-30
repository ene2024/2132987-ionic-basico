import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Alumno } from '../alumno.model'; 


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  nuevoAlumno: Alumno = {
    nombre: '',
    favorito: false,
    presente: false
  }

  alumnos: Alumno []= [
    {nombre: 'Carlos', favorito: false, presente: false},
    {nombre: 'Ximena', favorito: false, presente: true},
    {nombre: 'Alberto', favorito: false, presente: false}, 
    {nombre: 'Barbara', favorito: false, presente: true},
    {nombre: 'Georgina', favorito: false, presente: true},
    {nombre: 'Kevin', favorito: false, presente: true}
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

  agregarAlumno() {

    this.alumnos.push(this.nuevoAlumno);
    
    console.log('Alumno agregado:', this.nuevoAlumno);

  }



  ngOnInit() {}

}
