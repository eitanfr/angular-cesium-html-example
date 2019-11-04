import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { AngularCesiumModule } from 'angular-cesium';
import { HtmlExampleComponent } from './html-layer/html-example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  AngularCesiumModule.forRoot({fixEntitiesShadows: false, customPipes: []}) 
  ],
  declarations: [ AppComponent, MapComponent, HtmlExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
