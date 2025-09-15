import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-footer',
  imports: [TPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
