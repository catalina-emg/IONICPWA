import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface estlista {
  name: string;
  redirectTo: string;
  icon: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class InicioPage {

  Elementos: estlista[] = [
    {
      name: 'Alerta',
      redirectTo: '/alert',
      icon: 'notifications-outline'
    },
    {
      name: 'Card',
      redirectTo: '/card',
      icon: 'id-card-outline'
    },
    {
      name: 'Date Time',
      redirectTo: '/datetime',
      icon: 'time-outline'
    },
    {
      name: 'Checkbox',
      redirectTo: '/checkbox',
      icon: 'checkmark-done-outline'
    },
    {
      name: 'FAB',
      redirectTo: '/fab',
      icon: 'add-circle-outline'
    },
    {
      name: 'Grid',
      redirectTo: '/grid',
      icon: 'grid-outline'
    },
    {
      name: 'Infinite Scroll',
      redirectTo: '/infinite',
      icon: 'infinite-outline'
    },
    {
      name: 'Input',
      redirectTo: '/input',
      icon: 'pencil-outline'
    },
    {
      name: 'Modal',
      redirectTo: '/modal',
      icon: 'browsers-outline'
    },
    {
      name: 'Popover',
      redirectTo: '/popover',
      icon: 'chatbubble-ellipses-outline'
    },
    {
      name: 'List',
      redirectTo: '/list',
      icon: 'reorder-three-outline'
    }
  ];
}