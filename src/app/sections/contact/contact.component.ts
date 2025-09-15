import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { ToastService } from '../../shared/toast.service';
import { TPipe } from '../../core/i18n/t.pipe';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TPipe, ScrollRevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  sending = false;
  sent = false;
  errorMsg = '';

  // Move EmailJS configuration here (consider environment config for production)
  private emailJsPublicKey = '3Jot8qYJbq4mCWwoO';
  private emailJsServiceId = 'service_uq2kf68';
  private emailJsTemplateId = 'template_trpw3x7';

  constructor(private toast: ToastService) {
    if (this.emailJsPublicKey && this.emailJsPublicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init({ publicKey: this.emailJsPublicKey });
    }
  }

  async onSubmit(formEl: HTMLFormElement, event?: Event) {
    event?.preventDefault();
    this.errorMsg = '';
    this.sent = false;
    this.sending = true;
    try {
      await emailjs.sendForm(
        this.emailJsServiceId,
        this.emailJsTemplateId,
        formEl
      );
      this.sent = true;
      this.toast.success("Message sent. We'll be in touch shortly.");
      formEl.reset();
    } catch (err) {
      console.error(err);
      this.errorMsg = 'Failed to send. Please try again.';
      this.toast.error('Failed to send. Please try again.');
    } finally {
      this.sending = false;
    }
  }
}
