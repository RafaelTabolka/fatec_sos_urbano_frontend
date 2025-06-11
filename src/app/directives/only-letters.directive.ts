import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]',
  standalone: true
})
export class OnlyLettersDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Regex que permite letras, espaços e teclas de controle como backspace, setas, etc.
    const allowedKeys = /^[a-zA-Z\s]*$/;
    
    // Teclas de controle que sempre queremos permitir
    const controlKeys = [
      'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'
    ];

    if (controlKeys.includes(event.key)) {
      return; // Permite a tecla de controle
    }
    
    // Verifica se a tecla pressionada corresponde à nossa regex
    if (!allowedKeys.test(event.key)) {
      event.preventDefault(); // Impede a digitação se não for letra ou espaço
    }
  }
}