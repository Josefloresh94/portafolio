import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from './../../data/projects.data';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-projects',
  imports: [CommonModule, FontAwesomeModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {
  filters = ['Todos', 'Básico', 'Intermedio', 'Avanzado'] as const;
  activeFilter = signal<'Todos' | 'Básico' | 'Intermedio' | 'Avanzado'>(
    'Todos'
  );
  projects = signal(PROJECTS);

  faGithub = faGithub;
  faExternalLink = faExternalLink;

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

  projectImages: Record<string, Array<{ src: string; alt: string }>> = {
    'firebase-crud': [
      {
        src: 'assets/images/Projects/crud-firebase/firebase-1.png',
        alt: 'Firebase CRUD - Pantalla principal',
      },
      {
        src: 'assets/images/Projects/crud-firebase/firebase-2.png',
        alt: 'Firebase CRUD - Formulario de creación',
      },
      {
        src: 'assets/images/Projects/crud-firebase/firebase-3.png',
        alt: 'Firebase CRUD - Vista de detalles',
      },
    ],
    store: [
      {
        src: 'assets/images/Projects/store/store-1.png',
        alt: 'Store - Pantalla principal',
      },
      {
        src: 'assets/images/Projects/store/store-2.png',
        alt: 'Firebase CRUD - Formulario de creación',
      },
      {
        src: 'assets/images/Projects/store/store-3.png',
        alt: 'Firebase CRUD - Vista de detalles',
      },
    ],
    'book-store': [
      {
        src: 'assets/images/Projects/book-store/book-store-1.png',
        alt: 'Book Store - Hero',
      },
      {
        src: 'assets/images/Projects/book-store/book-store-2.png',
        alt: 'Book Store - Grid de libros por categoría',
      },
      {
        src: 'assets/images/Projects/book-store/book-store-3.png',
        alt: 'Book Store - Detalle del libro',
      },
    ],
  };

  // Método para obtener las imágenes según el proyecto
  getProjectImages(projectTitle: string): Array<{ src: string; alt: string }> {
    // Convertir el título a un formato de clave (minúsculas, sin espacios)
    const key = projectTitle.toLowerCase().replace(/\s+/g, '-');

    // Retornar las imágenes del proyecto si existen, o las imágenes por defecto
    return this.projectImages[key] || this.projectImages['default'];
  }
}
