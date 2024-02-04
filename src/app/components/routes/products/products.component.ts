import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../services/products/products .interface';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { Varieties } from '../../../services/varieties/varieties.interface';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CarouselModule,TagModule,ButtonModule, CardModule,MultiSelectModule, FormsModule, InputNumberModule, DropdownModule,SplitButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  value1: number = 1;
  products!: Product[];
  selectedVarieties: Varieties[] = [];

  responsiveOptions: any[] | undefined;
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getAllProduct().subscribe(allProducts => {
      this.products = allProducts
    });
    

  }
  
  getVarietyOptions(varieties: any[]) {
    return varieties.map(variety => ({ label: variety.varietyValue, value: variety }));
  }

 

}
