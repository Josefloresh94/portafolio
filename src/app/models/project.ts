export interface Project {
  id: number;
  title: string;
  description: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  technologies: string[];
  repoUrl: string;
  demoUrl: string;
  image: string;
}
