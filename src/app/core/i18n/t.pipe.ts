import { Pipe, PipeTransform, inject, Signal } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({ name: 't', standalone: true, pure: false })
export class TPipe implements PipeTransform {
  private i18n = inject(TranslateService);
  private lang: Signal<'fr' | 'en'> = this.i18n.lang;
  transform(value: string): string {
    // read the signal so Angular knows to re-evaluate when lang changes
    this.lang();
    return this.i18n.t(value);
  }
}
