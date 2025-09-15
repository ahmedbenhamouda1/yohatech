import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[appScrollReveal]', standalone: true })
export class ScrollRevealDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('sr');
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.classList.add('visible');
            o.unobserve(node);
          }
        });
      },
      { threshold: 0.08 }
    );
    obs.observe(node);
  }
}
