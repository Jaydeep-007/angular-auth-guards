import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-service-component',
  templateUrl: './product-service-component.component.html',
  styleUrls: ['./product-service-component.component.css']
})
export class ProductServiceComponent implements OnInit {

  constructor(){
    console.log('service component')
  }

  ngOnInit(): void {
    console.log('service component')
  }
  
}
