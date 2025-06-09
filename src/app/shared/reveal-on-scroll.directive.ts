import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit {

  constructor(
    /* 
    "el" é o elemento html que vai utilizar essa diretiva (div, buttom, ul, etc.)
    "renderer" serve para adicionar e remover classes no Angular de forma segura
    */
   private el: ElementRef,
   private renderer: Renderer2
  ) { }
  
  /* 
  É uma API nativa do navegador que detecta quando um elemento entra ou sai da tela
  */
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { // Está verificando se o elemento apareceu na tela.
          this.renderer.addClass(this.el.nativeElement, 'reveal-visible'); // Aqui estamos adicionando uma classe chamada 'reveal-visible'. É uma classe css para animar o elemento passado no primeiro argumento da função "addClass".
          observer.unobserve(this.el.nativeElement) // Depois que animou o elemento, o "unobserve" para de observar o elemento para que não consuma processamento desnecessário.
        }
      },
      { threshold: 0.1 } // Tempo de animação
    );

    observer.observe(this.el.nativeElement) // Depois de denifido todo o escopo de como vai observar, comece a observar quando o elemento aparece na tela
  }
}
