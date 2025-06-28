import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Technology } from '../../../models/technology';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDatabase,
  faCode,
  faServer,
  faCloud,
  faPuzzlePiece,
  faHeart,
  faGraduationCap,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faJs,
  faHtml5,
  faSass,
  faBootstrap,
  faGitAlt,
  faGithub,
  faNpm,
  faNodeJs,
  faJava,
  faDocker,
  faMicrosoft,
  faCss3,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-bento-card',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './bento-card.component.html',
  styleUrl: './bento-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flipCard', [
      state('front', style({ opacity: 1 })),
      state('back', style({ opacity: 1 })),
      transition('front <=> back', animate('0.6s ease-in-out')),
    ]),
  ],
  standalone: true,
})
export class BentoCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() frontContent!: string;
  @Input() backContent!: string;
  @Input() technologies: Technology[] = [];

  faDatabase = faDatabase;
  faCode = faCode;
  faServer = faServer;
  faCloud = faCloud;
  faPuzzlePiece = faPuzzlePiece;
  faHeart = faHeart;
  faGraduationCap = faGraduationCap;
  faQuestion = faQuestion;

  // Iconos de Font Awesome (Brands)
  faAngular = faAngular;
  faJs = faJs;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faSass = faSass;
  faBootstrap = faBootstrap;
  faGitAlt = faGitAlt;
  faGithub = faGithub;
  faNpm = faNpm;
  faNodeJs = faNodeJs;
  faJava = faJava;
  faDocker = faDocker;
  faMicrosoft = faMicrosoft;

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  getIcon(iconName: string) {
    const iconMap: { [key: string]: any } = {
      database: this.faDatabase,
      'code-bracket': this.faCode,
      server: this.faServer,
      cloud: this.faCloud,
      'puzzle-piece': this.faPuzzlePiece,
      heart: this.faHeart,
      'academic-cap': this.faGraduationCap,
    };
    return iconMap[iconName] || this.faQuestion;
  }

  getTechIcon(icon: string) {
    if (!icon) return this.faCode;

    const techIconMap: { [key: string]: any } = {
      angular: this.faAngular,
      typescript: this.faJs,
      html: this.faHtml5,
      sass: this.faSass,
      bootstrap: this.faBootstrap,
      git: this.faGitAlt,
      github: this.faGithub,
      npm: this.faNpm,
      nodejs: this.faNodeJs,
      java: this.faJava,
      docker: this.faDocker,
      javascript: this.faJs,
      html5: this.faHtml5,
      css3: this.faCss3,
      csharp: this.faMicrosoft,
      dotnet: this.faMicrosoft,
      aspnet: this.faMicrosoft,
      sqlserver: this.faDatabase,
      ef: this.faDatabase,
      mongodb: this.faDatabase,
      azure: this.faCloud,
      // 'api': this.faPlug,
      // 'cicd': this.faCodeBranch,
      // 'agile': this.faSync,
      // 'scrum': this.faUsers,
      // 'kanban': this.faTasks
    };
    return techIconMap[icon] || this.faCode;
  }
}
