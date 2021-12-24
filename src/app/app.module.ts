import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { QrCodeModule } from 'ng-qrcode';
import { PosterComponent } from './poster/poster.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RackComponent } from './rack/rack.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'poster', component: PosterComponent },
  { path: 'rack', component: RackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    InicioComponent,
    RackComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    QrCodeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
