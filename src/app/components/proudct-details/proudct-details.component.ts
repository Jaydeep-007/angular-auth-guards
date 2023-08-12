import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-proudct-details',
  templateUrl: './proudct-details.component.html',
  styleUrls: ['./proudct-details.component.css']
})
export class ProudctDetailsComponent {
  productDetail? : any;

  constructor(private route : ActivatedRoute,private productService : ProductService){}

  ngOnInit(): void {
    let productId = this.route.snapshot.params['id'];
    this.getProductDetailById(productId)
  }

  getProductDetailById(id: number){
    this.productService.getProductDetailById(id).subscribe(res => {
      this.productDetail = res
      console.log(res)
    })
  }
}
