import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TPipe, ScrollRevealDirective],
  templateUrl: './services.component.html',
})
export class ServicesComponent {}
