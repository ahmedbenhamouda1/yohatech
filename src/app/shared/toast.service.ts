import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration?: number; // ms
  leaving?: boolean; // internal flag for fade-out
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private idSeq = 0;
  private toastSubject = new Subject<Toast>();
  toasts$ = this.toastSubject.asObservable();

  show(message: string, type: ToastType = 'info', duration = 3500) {
    const toast: Toast = { id: ++this.idSeq, message, type, duration };
    this.toastSubject.next(toast);
  }

  success(message: string, duration = 3500) {
    this.show(message, 'success', duration);
  }

  error(message: string, duration = 4500) {
    this.show(message, 'error', duration);
  }
}
