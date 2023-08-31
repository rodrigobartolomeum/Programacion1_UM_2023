import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  verRutas = true;
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
    // Me fijo si la ruta es login y oculto funcionalidad
    if(this.router.url === '/login') {
      this.verRutas = false;
    }
  }
}
