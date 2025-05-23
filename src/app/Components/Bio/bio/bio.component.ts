import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  imports: [CommonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {
biotext : string [] =[
"I'm a backend developer at Locobuzz, where I focus on building and optimizing microservices for scalable systems.",
    "While my core work lies in backend engineering, I have a strong interest in designing clean, modern web interfaces and ",
    "continually explore frontend technologies to expand my full-stack capabilities. Passionate about learning, ",
    "I'm always looking to bridge the gap between robust backend systems and intuitive user experiences."
]
}