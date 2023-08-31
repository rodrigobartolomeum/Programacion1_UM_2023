import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-clases',
  templateUrl: './ver-clases.component.html',
  styleUrls: ['./ver-clases.component.css']
})
export class VerClasesComponent {
  arrayClases = [
    {
      img:'assets/clase1.jpg',
      titulo: 'Clase de Yoga',
      descripcion: 'Encuentra la tranquilidad y el equilibrio en nuestras clases de yoga.'
    },
    {
      img:'assets/clase2.jpg',
      titulo: 'Entrenamiento Funcional',
      descripcion: 'Mejora tu fuerza y resistencia con nuestro entrenamiento funcional.'
    },
    {
      img:'assets/clase3.jpg',
      titulo: 'Clase de Baile',
      descripcion: 'Baila y diviértete mientras quemas calorías en nuestras clases de baile.'
    }
  ];
  varVerClases = true;

  constructor() { }

  ngOnInit(): void {
    console.log('arrayClases: ', this.arrayClases);
  }

  verClases() {
    this.varVerClases = true;
  }

  ocultarClases() {
    this.varVerClases = false;
  }

}
