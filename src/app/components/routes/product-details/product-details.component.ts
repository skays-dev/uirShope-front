import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from "primeng/dropdown";
import { GalleriaModule } from 'primeng/galleria';
import { Product } from '../../../service/products/product.interface';
import { ProductService } from '../../../service/products/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [BreadcrumbModule, RatingModule, ButtonModule, DropdownModule, GalleriaModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
 
  items!: MenuItem[];

  rating: number = 5;
  
  quantity = [1,2,3,4,5,6,7]

  images: any = ["assets/images/product.png", "assets/images/product1.png"];

  product!: any;

  id!: number;
  constructor(
    private productService : ProductService,
    route: ActivatedRoute
  ){
    const idParams = route.snapshot.params['id']
    this.id = idParams
  }
  
  ngOnInit(): void {
    this.productService.getSingleProduct(this.id).subscribe(Product => {
		this.product = Product;
    console.log(this.product)
	  });

  }
}
