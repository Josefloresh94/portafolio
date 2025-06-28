import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BentoCardComponent } from './bento-card/bento-card.component';
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
      backContent:
        'Especializado en desarrollo de interfaces modernas y responsivas',
      technologies: [
        { name: 'Angular', icon: 'angular' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'SASS', icon: 'sass' },
      ],
    },
    {
      title: 'Backend',
      icon: 'server',
      frontContent: 'Click para ver tecnologías',
      backContent: 'Desarrollo de APIs robustas y servicios escalables',
      technologies: [
        { name: 'C#', icon: 'csharp' },
        { name: '.NET Core', icon: 'dotnet' },
        { name: 'ASP.NET', icon: 'aspnet' },
        { name: 'Web API', icon: 'api' },
      ],
    },
    {
      title: 'Bases de Datos',
      icon: 'database',
      frontContent: 'Click para ver tecnologías',
      backContent:
        'Diseño y optimización de bases de datos relacionales y NoSQL',
      technologies: [
        { name: 'SQL Server', icon: 'sqlserver' },
        { name: 'Entity Framework', icon: 'ef' },
        { name: 'MongoDB', icon: 'mongodb' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'cloud',
      frontContent: 'Click para ver tecnologías',
      backContent:
        'Implementación y mantenimiento de infraestructura en la nube',
      technologies: [
        { name: 'Azure', icon: 'azure' },
        { name: 'Docker', icon: 'docker' },
        { name: 'CI/CD', icon: 'cicd' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
      ],
    },
    {
      title: 'Metodologías',
      icon: 'puzzle-piece',
      frontContent: 'Click para ver metodologías',
      backContent:
        'Experiencia en metodologías ágiles de desarrollo de software',
      technologies: [
        { name: 'Agile', icon: 'agile' },
        { name: 'Scrum', icon: 'scrum' },
        { name: 'Kanban', icon: 'kanban' },
      ],
    },
    {
      title: 'Intereses',
      icon: 'heart',
      frontContent: 'Click para ver intereses',
      backContent:
        'Fuera del mundo de la programación, disfruto de los deportes al aire libre, los viajes y la lectura. Estas actividades me ayudan a mantener una perspectiva fresca y creativa.',
      technologies: [],
    },
    {
      title: 'Aprendizaje',
      icon: 'academic-cap',
      frontContent: 'Click para saber más',
      backContent:
        'Estoy enfocado en profundizar en tecnologías como Angular, C# y Java para crear o mantener progamas de calidad. Tambien en metodologías como SCRUM, Clean Code y SOLID, para mantenerme actualizado en este campo, el cual está en constante evolución.',
      technologies: [],
    },
  ];
}
