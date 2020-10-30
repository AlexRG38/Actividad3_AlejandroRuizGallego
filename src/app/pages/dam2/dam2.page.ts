import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {

  lista = [
    { val: 'Desarrollo de Interfaces', logo: 'assets/Interfaces.jpg', isChecked: false, color: 'primary' },
    { val: 'Acceso a datos', logo: 'assets/accesoDatos.jpg', isChecked: true, color: 'secondary' },
    { val: 'Programación de Servicios y Procesos', logo: 'assets/procesos.png', isChecked: false, color: 'tertiary' },
    { val: 'Programación Multimedia y Dispositivos Móviles', logo: 'assets/aplicacionesMoviles.png', isChecked: true, color: 'success' },
    { val: 'Sistemas de Gestión Empresarial', logo: 'assets/sistemasGestion.png', isChecked: false, color: 'warning' },
    { val: 'Empresa e Iniciativa emprendedora ', logo: 'assets/Empresa.jpg', isChecked: false, color: 'danger' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
