import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, ToggleComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose',[
      state(
        'open',
        style({
          height: '300px',
          opacity: 1,
        })),
      state(
        'closed',
        style({
          opacity: 0,
          height: '0px',
        }
        )),
      transition('open <=> closed', [animate('1s ease-out')]),
      transition('closed <=> open', [animate('1s ease-in')]),
    ])
  ]
})
export class NavbarComponent {
  faBars = faBars;

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
