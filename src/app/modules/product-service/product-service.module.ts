import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceComponent } from './product-service-component/product-service-component.component';
import { ProductServiceRoutingModule } from './product-service-routing.module';



@NgModule({
  declarations: [
    ProductServiceComponent
  ],
  imports: [
    ProductServiceRoutingModule,
    CommonModule
  ]
})
export class ProductServiceModule { }
