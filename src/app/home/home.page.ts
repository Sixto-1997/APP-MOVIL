import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  componentes: Componente[] =[
    {
      icon: 'accessibility-outline',
      name: 'Datos Personales',
      redirectTo: '/datos'
    },
    {
      icon: 'bookmark-outline',
      name: 'Experiencias Laborales',
      redirectTo: '/experiencias'
    },
    {
      icon: 'bookmarks-outline',
      name: 'Cursos Adicionales',
      redirectTo: '/cursos'
    },
    {
      icon: 'book-outline',
      name: 'Educación Académica',
      redirectTo: '/educacion'
    },
    {
      icon: 'people-circle-outline',
      name: 'Referencias Laborales',
      redirectTo: '/laborales'
    },
    {
      icon: 'people-outline',
      name: 'Referencias Personales',
      redirectTo: '/personales'
    }
  ];

  constructor() {}

  ngOnInit(){

  }

}
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
