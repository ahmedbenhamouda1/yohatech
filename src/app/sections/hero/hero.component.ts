import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TPipe, ScrollRevealDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
