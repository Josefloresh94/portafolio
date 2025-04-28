import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-toggle',
  imports: [FontAwesomeModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent implements OnInit {
  private themeService = inject(ThemeService);

  isDarkMode = signal<boolean>(false);
  faSun = faSun;
  faMoon = faMoon;

  constructor() {
    // Use effect to react to theme changes
    effect(() => {
      const currentTheme = this.themeService.theme();
      this.isDarkMode.set(currentTheme === 'dark');
    });
  }

  ngOnInit(): void {
    // Obtener el tema inicial
    this.isDarkMode.set(this.themeService.getCurrentTheme() === 'dark');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
