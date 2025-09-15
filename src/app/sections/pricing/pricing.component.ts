import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [TPipe, ScrollRevealDirective],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {}
