import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  typedText = '';

  private fullText =
    'Software developer che progetta e realizza applicazioni web complete, tra frontend e backend, con attenzione a struttura, logica e qualità del codice.';
    
  private index = 0;

  ngOnInit() {
    this.type();
  }

  type() {
    if (this.index < this.fullText.length) {
      this.typedText += this.fullText[this.index];
      this.index++;

      setTimeout(() => this.type(), 25); // velocità typing
    }
  }
}
