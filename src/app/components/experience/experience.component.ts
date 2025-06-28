import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'Actualmente...',
      title: 'Conversion Specialist − Slidegrin LLC - El Salvador',
      description:
        'Me desempeño en la conversión de diversas formas de contenido en múltiples formatos. Garantizando la compatibilidad y manteniendo la integridad del material original.',
    },
    {
      date: 'Junio - Agosto 2022 ',
      title: 'Trainee PEGA Program − PerseusX - El Salvador',
      description:
        'Me formé en el desarrollo de aplicaciones por medio de la plataforma low-code PEGA.',
    },
    {
      date: 'Enero 2021 - Mayo 2021',
      title: 'Trainee Data Scientist − Lastfood - Colombia',
      description:
        'Puse en práctica mis conocimientos de cocina, para ayudar a esta StartUp a encontrar estrategias con las cuales, ayudar a evitar el desperdicio de alimentos, por medio de una app de domicilio.',
    },
  ];
}
