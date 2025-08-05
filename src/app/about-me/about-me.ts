import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  aboutIntro = "I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences. With several years of experience in web development, I enjoy tackling complex problems and turning ideas into reality.";
  
  aboutDetails = "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.";

  skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'Java Spring', level: 95 },
    { name: 'DevOps', level: 95 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Docker', level: 70 }
  ];

  // Added the missing experience property
  experience = [

    {
      year: '2024 - 2025',
      position: 'Full Stack Developer',
      company: 'Enaa beni mellal',
      description: 'Developed web applications using Angular frontend and Java Spring backend, integrated with Docker containers.'
    }
  ];

  stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' }
  ];
}