import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from "primeng/dropdown";
import { GalleriaModule } from 'primeng/galleria';

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

  products = [
		{
			id: "1000",
			name: "T-shirt Polo",
			image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
		},
		{
			id: "1000",
			name: "T-shirt Polo",
			image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
		},
		{
			id: "1000",
			name: "T-shirt Polo",
			image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
		},
		{
			id: "1000",
			name: "T-shirt Polo",
			image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
		},
		{
			id: "1000",
			name: "T-shirt Polo",
			image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
		},
		{
			id: "1000",
			name: "T-shirt Polo",
			image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
		},
		{
			id: "1000",
			name: "T-shirt Polo",
			image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
		},
	]

  ngOnInit(): void {
    this.items = [{ label: 'UIR Shope', routerLink: '/' }, { label: 'textille', routerLink: '/product-details' }, { label: 'Name Product', routerLink: '/product-details' }];

  }
}
