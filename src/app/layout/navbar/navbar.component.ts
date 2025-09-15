import { Component, computed, inject, signal } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';
import { TranslateService } from '../../core/i18n/translate.service';

@Component({
  selector: 'app-navbar',
  imports: [TPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private i18n = inject(TranslateService);
  lang = computed(() => this.i18n.lang());
  menuOpen = signal(false);
  set(l: 'fr' | 'en') {
    this.i18n.setLang(l);
    this.menuOpen.set(false);
  }
  toggle() {
    this.menuOpen.update((v) => !v);
  }
  close() {
    this.menuOpen.set(false);
  }
}
