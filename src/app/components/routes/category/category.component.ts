import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { CategoryService } from '../../../service/categories/category.service';
import { ProductCategory } from '../../../service/categories/category.interface';

@Component({
	selector: 'app-category',
	standalone: true,
	imports: [BreadcrumbModule, CarouselModule, ButtonModule, DataViewModule],
	templateUrl: './category.component.html',
	styleUrl: './category.component.scss'
})
export class CategoryComponent {
	items!: MenuItem[];

	// products = [
	// 	{
	// 		id: "1000",
	// 		name: "T-shirt Polo",
	// 		image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
	// 	},
	// 	{
	// 		id: "1000",
	// 		name: "T-shirt Polo",
	// 		image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
	// 	},
	// 	{
	// 		id: "1000",
	// 		name: "T-shirt Polo",
	// 		image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
	// 	},
	// 	{
	// 		id: "1000",
	// 		name: "T-shirt Polo",
	// 		image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
	// 	},
	// 	{
	// 		id: "1000",
	// 		name: "T-shirt Polo",
	// 		image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
	// 	},
	// 	{
	// 		id: "1000",
	// 		name: "T-shirt Polo",
	// 		image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
	// 	},
	// 	{
	// 		id: "1000",
	// 		name: "T-shirt Polo",
	// 		image: ["bamboo-watch.jpg", "bamboo-watch.jpg"],
	// 	},
	// ];

	products!: ProductCategory[];

	images: any = ["assets/images/product.png", "assets/images/product1.png"];


	id: string;

	constructor(
		route: ActivatedRoute,
		private categoriesService: CategoryService
	) {
		const idParams = route.snapshot.params['id']
    	this.id = idParams
	}

	ngOnInit(): void {
		this.items = [
			{
				label: 'UIR Shope',
				routerLink: '/'
			},
			{
				label: 'Categories',
			},
			{
				label: this.id,
			},
		];

		console.log(this.id)
		this.categoriesService.getProductsForCategory(this.id).subscribe(data => {
			this.products = data;
			console.log(data)
		})
	}

	truncateText(text: string, limit: number): string {
		if (text.length > limit) {
		  return text.substring(0, limit) + '...';
		}
		return text;
	  }
}