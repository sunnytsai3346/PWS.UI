import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import routeConfig from './routerConfig';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
