import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  today = new Date();
}
