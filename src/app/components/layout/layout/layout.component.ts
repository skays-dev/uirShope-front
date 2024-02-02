import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent  {
        
        
}