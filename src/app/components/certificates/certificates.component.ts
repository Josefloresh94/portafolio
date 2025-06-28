import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Certificado } from '../../models/certificado';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
} from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('rotarCertificados', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0) scale(1)',
        })
      ),
      state(
        'oculto',
        style({
          opacity: 0,
          transform: 'translateY(-30px) scale(0.95)',
        })
      ),
      transition('visible => oculto', [
        group([
          animate(
            '400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({ opacity: 0 })
          ),
          animate(
            '500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({ transform: 'translateY(-30px) scale(0.95)' })
          ),
        ]),
      ]),
      transition('oculto => visible', [
        group([
          animate(
            '400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({ opacity: 1 })
          ),
          animate(
            '500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({ transform: 'translateY(0) scale(1)' })
          ),
        ]),
      ]),
    ]),
    trigger('indicadorActivo', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate(
          '300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ transform: 'scale(1)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ transform: 'scale(0)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class CertificatesComponent implements OnInit, OnDestroy {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  certificados: Certificado[] = [
    {
      id: 1,
      titulo: 'Curso Angular 17',
      plataforma: 'Platzi',
      fecha: 'Enero 2024',
      imagen: '../../../assets/images/Angular/diploma-angular.jpg',
    },
    {
      id: 2,
      titulo: 'Curso de Docker',
      plataforma: 'Platzi',
      fecha: 'Enero 2023',
      imagen: '../../../assets/images/',
    },
    {
      id: 3,
      titulo: 'MongoDB DB',
      plataforma: 'Platzi',
      fecha: 'Marzo 2023',
      imagen: '../../../assets/images/',
    },
    {
      id: 4,
      titulo: 'Git y GitHub',
      plataforma: 'Platzi',
      fecha: 'Mayo 2023',
      imagen: '../../../assets/images/',
    },
    {
      id: 5,
      titulo: 'Curso de FIGMA',
      plataforma: 'Platzi',
      fecha: 'Julio 2023',
      imagen: '../../../assets/images/',
    },
    {
      id: 6,
      titulo: 'React JS',
      plataforma: 'Platzi',
      fecha: 'Septiembre 2023',
      imagen: '../../../assets/images/',
    },
    {
      id: 7,
      titulo: 'Fundamentos de Criptografía',
      plataforma: 'Platzi',
      fecha: 'Noviembre 2024',
      imagen: '../../../assets/images/',
    },
    {
      id: 8,
      titulo: 'Funciones con JS Library',
      plataforma: 'Platzi',
      fecha: 'Diciembre 2024',
      imagen: '../../../assets/images/',
    },
  ];

  certificadoActivo = 0;
  estadoAnimacion: 'visible' | 'oculto' = 'visible';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intervaloRotacion: any;

  ngOnInit(): void {
    this.iniciarRotacion();
  }

  ngOnDestroy(): void {
    this.detenerRotacion();
  }

  iniciarRotacion(): void {
    this.intervaloRotacion = setInterval(() => {
      this.cambiarCertificado();
    }, 4000); // Cambio cada 3 segundos
  }

  detenerRotacion(): void {
    if (this.intervaloRotacion) {
      clearInterval(this.intervaloRotacion);
      this.intervaloRotacion = null;
    }
  }

  cambiarCertificado(direccion: 'siguiente' | 'anterior' = 'siguiente'): void {
    // Primero ocultamos el certificado actual
    this.estadoAnimacion = 'oculto';

    setTimeout(() => {
      // Cambiamos al siguiente o anterior certificado
      if (direccion === 'siguiente') {
        this.certificadoActivo =
          (this.certificadoActivo + 1) % this.certificados.length;
      } else {
        this.certificadoActivo =
          (this.certificadoActivo - 1 + this.certificados.length) %
          this.certificados.length;
      }
      // Hacemos visible el nuevo certificado
      this.estadoAnimacion = 'visible';
    }, 500); // Tiempo para completar la animación de ocultamiento
  }

  seleccionarCertificado(index: number): void {
    if (index === this.certificadoActivo) return;

    this.detenerRotacion();
    this.estadoAnimacion = 'oculto';

    setTimeout(() => {
      this.certificadoActivo = index;
      this.estadoAnimacion = 'visible';
      this.iniciarRotacion();
    }, 500);
  }

  certificadoAnterior(): void {
    this.detenerRotacion();
    this.cambiarCertificado('anterior');

    // Reanudamos la rotación después de un tiempo
    setTimeout(() => {
      this.iniciarRotacion();
    }, 500);
  }

  certificadoSiguiente(): void {
    this.detenerRotacion();
    this.cambiarCertificado('siguiente');

    // Reanudamos la rotación después de un tiempo
    this.iniciarRotacion();
  }
}
