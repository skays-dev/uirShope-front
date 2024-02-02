import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [MenubarModule, InputTextModule, RouterLink, SidebarModule, BadgeModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
    display!: boolean;

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Uir Shop',
                styleClass: 'nav-item'
            },
            {
                label: 'Textile',
                styleClass: 'nav-item'
            },
            {
                label: 'Goodies',
                styleClass: 'nav-item'
            },
            {
                label: 'High tech',
                styleClass: 'nav-item'
            },
        ];
    }
}
