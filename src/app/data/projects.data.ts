import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Firebase CRUD',
    description:
      'Se desarrolla un CRUD utilizando las plataformas de Google para autenticación: Firebase y su base de datos: Firestore, para así crear usuarios y que cada usuario tenga un listado de tareas.',
    level: 'Básico',
    technologies: [
      'Angular',
      'Firestore',
      'Firebase',
      'Tailwing 4',
      'TypeScript',
    ],
    repoUrl: 'https://github.com/Josefloresh94/firestore-crud',
    demoUrl: 'https://dashboard-demo.com',
    image: '',
  },
  {
    id: 2,
    title: 'Store',
    description:
      'Aplicación para gestionar tareas diarias con funcionalidades de arrastrar y soltar.',
    level: 'Intermedio',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'Angular Material'],
    repoUrl: 'https://github.com/Josefloresh94/store',
    demoUrl: 'https://todo-demo.com',
    image: '',
  },
  {
    id: 3,
    title: 'Book Store',
    description:
      'Aplicación que me fue solicitada en una prueba técnica para una entrevista. La app consume la API: api.itbook.store',
    level: 'Intermedio',
    technologies: ['Angular', 'TypeScript', 'API REST', 'Angular Material'],
    repoUrl: 'https://github.com/Josefloresh94/BookStore',
    demoUrl: 'https://todo-demo.com',
    image: '',
  },
  // {
  //   id: 3,
  //   title: 'Ruffians',
  //   description:
  //     'Página de una barbería, en la cual se podrá agendar citas, comprar productos e informar al cliente sobre los servicios que se ofrecen.',
  //   level: 'Avanzado',
  //   technologies: [
  //     'Angular',
  //     'Google Maps',
  //     'Firebase',
  //     'Firestore',
  //     'TypeScript',
  //   ],
  //   repoUrl: 'https://github.com/Josefloresh94/ruffians',
  //   demoUrl: 'https://ecommerce-demo.com',
  //   image: '',
  // },
  // {
  //   id: 4,
  //   title: 'Trello Clone',
  //   description:
  //     'Aplicación para gestionar tareas diarias con funcionalidades de arrastrar y soltar.',
  //   level: 'Intermedio',
  //   technologies: ['Angular', 'TypeScript', 'Firebase', 'Angular Material'],
  //   repoUrl: 'https://github.com/usuario/todo-app',
  //   demoUrl: 'https://todo-demo.com',
  //   image: '',
  // },
];
