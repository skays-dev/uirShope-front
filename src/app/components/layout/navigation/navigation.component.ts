import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { Category } from '../../../service/categories/category.interface';
import { CategoryService } from '../../../service/categories/category.service';
@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [MenubarModule, InputTextModule, RouterLink, SidebarModule, BadgeModule, RouterLink],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
    display!: boolean;

    itemsFormat: MenuItem[] = [
        {
            label: 'Uir Shop',
            styleClass: 'nav-item',
            routerLink: '/'
        }
    ];

    items!: MenuItem[];



    constructor(private categoriesService: CategoryService) {

    }

    ngOnInit() {
        this.categoriesService.getAllCategories().subscribe(data => {
            const category = data.map(val => {
                return {
                    label: val.nomCategory,
                    styleClass: 'nav-item',
                    routerLink: '/categories/' + val.nomCategory
                }
            })
            this.itemsFormat.push(...category)

            this.items = this.itemsFormat;
        })
    }
}
