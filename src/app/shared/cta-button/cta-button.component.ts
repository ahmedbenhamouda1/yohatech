import { Component, Input } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [TPipe],
  template: `
    <div class="cta-group">
      <a [href]="href" class="btn primary">{{
        labelKey ? (labelKey | t) : label
      }}</a>
    </div>
  `,
})
export class CtaButtonComponent {
  @Input() href = '#contact';
  @Input() labelKey?: string;
  @Input() label?: string;
}
