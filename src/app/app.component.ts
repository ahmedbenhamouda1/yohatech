import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
// No template-level pipes or directives needed in AppComponent
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ToastContainerComponent } from './shared/toast-container.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    PricingComponent,
    TestimonialsComponent,
    ContactComponent,
    ToastContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trinovatech';
  constructor() {}
}
