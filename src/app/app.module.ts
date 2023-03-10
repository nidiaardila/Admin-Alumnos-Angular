import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';

// import { TamanoFuenteDirective } from './directives/tamano-fuente.directive';
// import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    // TamanoFuenteDirective
    // NombreCompletoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
