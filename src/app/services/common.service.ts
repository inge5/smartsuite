import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private titulo: Title, private meta: Meta) { }

  paginaInicioMetaData(){
    this.paginaMetaData(
      'optimiza tu gestion comercial con las mejores apps desde la nube',
      'Automatiza tus procesos y optimiza a tu equipo de trabajo con las mejores herramientas',
      'Seguridad o trazabilidad gps con Smarsuite',
      ''
    )
  }
  paginaSmartSalesMetaData(){
    this.paginaMetaData(
      'Digitaliza tus procesos de ventas',
      'Registra tus ventas, recaudos e indicadores de gestion con SmartSales',
      'Administra y crea tus clientes con informacion en la nube',
      ''
    )
  }
  paginaMobileFormsMetaData(){
    this.paginaMetaData(
      'Accede a la informacion recopilada desde cualquier lugar',
      'Brindamos la herramienta perfecta para optimizar tu empresa.',
      'Te ayudamos en la gestion de tu negocio manejandolo desde la nube.',
      ''
    )
  }

  paginaOneCheckMetaData(){
    this.paginaMetaData(
      'Supervisa, planifica y monitorea a tu equipo',
      'Rastrea con tecnologia NFC las rondas de tu personal de seguridad ',
      'Maneja los puntos de marcacion con tecnologia NFC',
      ''
    )
  }

  paginaOneTimeMetaData(){
    this.paginaMetaData(
      'Informacion de rutas en tiempo real',
      'Obten informacion en tiempo real sobre la ruta de tu empresa o escuela',
      'Accede como padre para saber la ubicación exacta de tu hijo',
      ''
    )
  }

  paginaCareTaskMetaData(){
    this.paginaMetaData(
      'Asigna tareas a tus camilleros',
      'Controla las tareas de tus camilleros digitalmente ',
      'Maneja en tiempo real las tareas de tu equipo',
      ''
    )
  }

  paginaInTrackMetaData(){
    this.paginaMetaData(
      'Supervisa a tu equipo de trabajo',
      'Informa detalladamente la ubicación gps de tu equipo',
      'Visualiza los diferentes lugares visitados por tu personal',
      ''
    )
  }

  paginaMetaData(titulo: string, descripcion: string, keywords: string = '', url: string = ''): void{
    this.titulo.setTitle(titulo);

    this.meta.updateTag({
      property: 'og:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:url',
      content: url
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.title',
      content: titulo
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      property: 'og:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'twitter:description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.description',
      content: descripcion
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'keywords',
      content: keywords
    } as MetaDefinition);

    this.meta.updateTag({
      name: 'DC.subject',
      content: keywords
    } as MetaDefinition);
  }
}
