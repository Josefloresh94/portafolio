import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BentoCardComponent } from "./bento-card/bento-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [BentoCardComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  cards = [
    {
      title: 'Frontend',
      icon: 'code-bracket',
      frontContent: 'Click para ver tecnologías',
      backContent: 'Especializado en desarrollo de interfaces modernas y responsivas',
      technologies: [
        { name: 'Angular', icon: 'angular.svg' },
        { name: 'TypeScript', icon: 'typescript.svg' },
        { name: 'JavaScript', icon: 'javascript.svg'},
        { name: 'HTML5', icon: 'html5.svg' },
        { name: 'CSS3', icon: 'css3.svg' },
        { name: 'SASS', icon: 'sass.svg' }
      ]
    },
    {
      title: 'Backend',
      icon: 'server',
      frontContent: 'Click para ver tecnologías',
      backContent: 'Desarrollo de APIs robustas y servicios escalables',
      technologies: [
        { name: 'C#', icon: 'csharp.svg' },
        { name: '.NET Core', icon: 'dotnet.svg' },
        { name: 'ASP.NET', icon: 'aspnet.svg' },
        { name: 'Web API', icon: 'api.svg' }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: 'database',
      frontContent: 'Click para ver tecnologías',
      backContent: 'Diseño y optimización de bases de datos relacionales y NoSQL',
      technologies: [
        { name: 'SQL Server', icon: 'sqlserver.svg' },
        { name: 'Entity Framework', icon: 'ef.svg' },
        { name: 'MongoDB', icon: 'mongodb.svg' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'cloud',
      frontContent: 'Click para ver tecnologías',
      backContent: 'Implementación y mantenimiento de infraestructura en la nube',
      technologies: [
        { name: 'Azure', icon: 'azure.svg' },
        { name: 'Docker', icon: 'docker.svg' },
        { name: 'CI/CD', icon: 'cicd.svg' },
        { name: 'Git', icon: 'git.svg' }
      ]
    },
    {
      title: 'Metodologías',
      icon: 'puzzle-piece',
      frontContent: 'Click para ver metodologías',
      backContent: 'Experiencia en metodologías ágiles de desarrollo de software',
      technologies: [
        { name: 'Agile', icon: 'agile.svg' },
        { name: 'Scrum', icon: 'scrum.svg' },
        { name: 'Kanban', icon: 'kanban.svg' }
      ]
    },
    {
      title: 'Intereses',
      icon: 'heart',
      frontContent: 'Click para ver intereses',
      backContent: 'Fuera del mundo de la programación, disfruto de la fotografía, los viajes y la lectura. Estas actividades me ayudan a mantener una perspectiva fresca y creativa.',
      technologies: []
    },
    {
      title: 'Aprendizaje',
      icon: 'academic-cap',
      frontContent: 'Click para saber más',
      backContent: 'Siempre estoy aprendiendo nuevas tecnologías y metodologías para mantenerme actualizado en este campo en constante evolución.',
      technologies: []
    }
  ];
}
