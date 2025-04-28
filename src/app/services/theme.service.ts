import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    // Apply theme changes to body class
    effect(() => {
      const currentTheme = this.theme();
      const body = this.document.body;

      // Remove both classes first
      body.classList.remove('theme-light', 'theme-dark');

      // Add the current theme class
      body.classList.add(`theme-${currentTheme}`);
    });
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.theme.set(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.theme.set(prefersDark ? 'dark' : 'light');
    }
  }

  // Alternar entre temas
  toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Obtener tema actual
  getCurrentTheme(): string {
    return this.theme();
  }
}
