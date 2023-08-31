import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-planificaciones',
  templateUrl: './ver-planificaciones.component.html',
  styleUrls: ['./ver-planificaciones.component.css']
})
export class VerPlanificacionesComponent {
  arrayPlanificaciones = [
    {
      nombre:'Planificación 1'
    },
    {
      nombre:'Planificación 2'
    },
    {
      nombre:'Planificación 3'
    }
  ];
}
