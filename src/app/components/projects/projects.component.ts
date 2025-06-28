import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from './../../data/projects.data';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FontAwesomeModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  filters = ['Todos', 'Básico', 'Intermedio', 'Avanzado'] as const;
  activeFilter = signal<'Todos' | 'Básico' | 'Intermedio' | 'Avanzado'>(
    'Todos'
  );
  projects = signal(PROJECTS);
  loading = signal(true);

  faGithub = faGithub;
  faExternalLink = faExternalLink;

  private http = inject(HttpClient);

  constructor() {
    this.http.get<Project[]>('assets/projects.json').subscribe({
      next: data => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') return this.projects();
    return this.projects().filter(p => p.level === filter);
  });

  setActiveFilter(filter: (typeof this.filters)[number]) {
    this.activeFilter.set(filter);
  }

  trackByProjectId(index: number, project: Project) {
    return project.id;
  }
}
