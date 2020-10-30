import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  nombre = 'Alejandro Ruiz';
  localidad = 'Manzanares';
  estudios = '2º DAM';
  email = 'alejandrorrg.2001@gmail.com';
  password = 'hola38';

  constructor() { }

  ngOnInit() {
  }

}
