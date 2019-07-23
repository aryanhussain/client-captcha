import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app-new';
  @ViewChild('mainCaptcha', { static: false }) mainCaptcha: ElementRef;
  captcha: string;
  amount = new FormControl();

  constructor() {
    this.captcha = '';
  }

  ngAfterViewInit() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    const alpha = new Array(
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    );
    let a, b, c, d, e, f, g;

    for (let i = 0; i < 6; i++) {
      a = alpha[Math.floor(Math.random() * alpha.length)];
      b = alpha[Math.floor(Math.random() * alpha.length)];
      c = alpha[Math.floor(Math.random() * alpha.length)];
      d = alpha[Math.floor(Math.random() * alpha.length)];
      e = alpha[Math.floor(Math.random() * alpha.length)];
      f = alpha[Math.floor(Math.random() * alpha.length)];
      g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    const code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    this.mainCaptcha.nativeElement.innerHTML = code;
  }

  validateCaptcha() {
    const string1 = this.removeSpaces(this.mainCaptcha.nativeElement.innerHTML);
    if (string1 === this.amount.value) {
      return true;
    } else {
      return false;
    }
  }

  removeSpaces(string) {
    return string.split(' ').join('');
  }

  submit() {
    if (this.validateCaptcha() === false) {
      alert('Validation failed');
    }else{
      alert('Validation passed')
    }
  }
}
