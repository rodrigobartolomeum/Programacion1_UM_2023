import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-user',
  templateUrl: './ver-user.component.html',
  styleUrls: ['./ver-user.component.css']
})
export class VerUserComponent {
  arrayUsuarios = [
    {
      id: 1,
      nombre:' Usuario 1'
    },
    {
      id: 2,
      nombre:' Usuario 2'
    },
    {
      id: 3,
      nombre:' Usuario 3'
    }
  ];
  
  constructor(
    private router: Router
  ){}

  editarUsuario(usuario:any){
    console.log('Usuario a editar', usuario);
    this.router.navigateByUrl('/usuario/'+usuario.id+'/Editar') // navigate(['/usuario/'+usuario.id+'/Editar']);

  }
  
}
