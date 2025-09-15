import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TPipe, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {}
