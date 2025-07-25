import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, ComponentesModule, FormsModule],
})
export class InputPage implements OnInit {
  alumno = {
    nombre: 'Catalina',
    apellidos: 'Martinez',
    nacimiento: new Date('2004-09-05').toISOString(),
    email: 'catalina@gmail.com',
    telefono: '8979721122'
  };
  constructor() { }
  ngOnInit() {
    const nacimiento = new Date(this.alumno.nacimiento);
    console.log(nacimiento.getFullYear()); 
    console.log(nacimiento.getMonth());    
    console.log(nacimiento.getDate());     
  }
  get edad() { 
    if (!this.alumno.nacimiento) return 0;
    const fechaNac = new Date(this.alumno.nacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    if (hoy.getMonth() < fechaNac.getMonth() || 
        (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }
}