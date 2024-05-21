import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [
    FooterComponent
  //   CommonModule,
  //   NavbarComponent,
  //   FooterComponent
  ],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class BasicLayoutComponent {}
