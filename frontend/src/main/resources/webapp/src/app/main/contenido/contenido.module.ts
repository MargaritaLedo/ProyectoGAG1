import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import {OntimizeWebModule} from "ontimize-web-ngx";
import {ContenidoHomeComponent} from "./contenido-home/contenido-home.component";
import { ContenidoDetailComponent } from './contenido-detail/contenido-detail.component';
import { ContenidoComentariosComponent } from './contenido-comentarios/contenido-comentarios.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    ContenidoRoutingModule
  ],
  declarations: [
    ContenidoHomeComponent,
    ContenidoDetailComponent,
	ContenidoComentariosComponent
  ],
  exports:[
      ContenidoDetailComponent
  ]
})
export class ContenidoModule { }
