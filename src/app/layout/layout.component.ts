import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { CertificatesComponent } from '../components/certificates/certificates.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeroComponent,
    NavbarComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificatesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
