import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { Toast, ToastService } from './toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-wrap">
      <div
        *ngFor="let t of toasts"
        class="toast"
        [class.success]="t.type === 'success'"
        [class.error]="t.type === 'error'"
        [class.leaving]="t.leaving === true"
      >
        {{ t.message }}
      </div>
    </div>
  `,
  styles: [
    `
      .toast-wrap {
        position: fixed;
        right: 16px;
        bottom: 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
      }
      .toast {
        padding: 10px 14px;
        border-radius: 10px;
        background: #111;
        color: #fff;
        box-shadow: var(--shadow);
        opacity: 0;
        transform: translateY(6px);
        animation: toast-in 0.25s ease forwards;
      }
      .toast.success {
        background: #16a34a;
      }
      .toast.error {
        background: #dc2626;
      }
      .toast.leaving {
        opacity: 0 !important;
        transform: translateY(6px) !important;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
      @keyframes toast-in {
        to {
          opacity: 0.95;
          transform: none;
        }
      }
      @media (max-width: 700px) {
        .toast-wrap {
          right: 12px;
          left: 12px;
          align-items: flex-end;
        }
      }
    `,
  ],
})
export class ToastContainerComponent implements OnDestroy {
  toasts: Toast[] = [];
  private sub: Subscription;

  constructor(private toast: ToastService) {
    this.sub = this.toast.toasts$.subscribe((t) => {
      this.toasts.push(t);
      const duration = typeof t.duration === 'number' ? t.duration : 3500;
      timer(duration).subscribe(() => {
        // mark as leaving to trigger fade-out, then remove after transition
        const idx = this.toasts.findIndex((x) => x.id === t.id);
        if (idx !== -1) {
          this.toasts[idx] = { ...this.toasts[idx], leaving: true };
          timer(220).subscribe(() => {
            this.toasts = this.toasts.filter((x) => x.id !== t.id);
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
