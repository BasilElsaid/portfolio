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
    'Junior Backend-oriented developer focalizzato su API REST, architettura software e applicazioni web moderne.';

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
