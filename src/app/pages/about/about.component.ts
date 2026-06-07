import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  techStack = [
    { name: 'Java', icon: 'assets/icons/java.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'HTML', icon: 'assets/icons/html5.svg' },
    { name: 'CSS', icon: 'assets/icons/css3.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'Spring Boot', icon: 'assets/icons/springboot.svg' },
    { name: 'NestJS', icon: 'assets/icons/nestjs.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
  ];

  isDesktop = true;

  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
  }

  checkScreen() {
    this.isDesktop = window.innerWidth >= 768;
  }
}
