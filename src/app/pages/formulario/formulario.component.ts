import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Servicio } from '../../models/servicio.model';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  public servicio: Servicio;
  public fileToUpload: File | null = null;
  public status: string = '';

  constructor(
    private _serviciosService: ServiciosService
  ) {
    this.servicio = {
      nombre: '',
      categoria: '',
      descripcion: '',
      precio: '',
      foto: ''
    };
  }

  onSubmit(form: any) {
    this._serviciosService.saveService(this.servicio).subscribe(
      response => {
        if (response.servicio) {
          // Subir la imagen
          if (this.fileToUpload) {
            this._serviciosService.uploadPhoto(this.fileToUpload, response.servicio._id).subscribe(
              result => {
                this.status = 'success';
                form.reset();
              },
              error => {
                console.log(error);
                this.status = 'failed';
              }
            );
          } else {
            this.status = 'success';
            form.reset();
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error);
        this.status = 'failed';
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.fileToUpload = <File>fileInput.target.files[0];
  }

}
