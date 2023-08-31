import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-user',
  templateUrl: './ver-user.component.html',
  styleUrls: ['./ver-user.component.css']
})
export class VerUserComponent {
  arrayUsuarios = [
    {
      nombre:' Usuario 1'
    },
    {
      nombre:' Usuario 2'
    },
    {
      nombre:' Usuario 3'
    }
  ];

}
