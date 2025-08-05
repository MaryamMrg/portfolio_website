import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Home } from "./home/home";
import { AboutMe } from "./about-me/about-me";
import { Contact } from "./contact/contact";
import { Project } from "./project/project";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, AboutMe, Contact, Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio-website';
}
