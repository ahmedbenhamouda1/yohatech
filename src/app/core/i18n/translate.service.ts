import { Injectable, effect, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  // default language: French
  lang = signal<'fr' | 'en'>('fr');
  private cache = new Map<'fr' | 'en', Record<string, any>>();
  private data = signal<Record<string, any>>({});

  constructor() {
    // auto-load current language on start and when it changes
    effect(() => {
      const l = this.lang();
      this.loadLang(l);
    });
  }

  private async loadLang(l: 'fr' | 'en') {
    if (this.cache.has(l)) {
      this.data.set(this.cache.get(l)!);
      return;
    }
    try {
      const res = await fetch(`./i18n/${l}.json`, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`Failed to load ${l}.json`);
      const json = (await res.json()) as Record<string, any>;
      this.cache.set(l, json);
      this.data.set(json);
    } catch (e) {
      console.error('i18n load failed', e);
      this.data.set({});
    }
  }

  setLang(l: 'fr' | 'en') {
    this.lang.set(l);
  }

  t(path: string): string {
    const parts = path.split('.');
    let ref: any = this.data();
    for (const p of parts) ref = ref?.[p];
    return typeof ref === 'string' ? ref : path;
  }
}
