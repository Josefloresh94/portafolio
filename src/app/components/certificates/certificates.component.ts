import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
} from '@angular/core';
import { CertificadosPorCategoria } from '../../models/certificado';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CertificatesComponent {
  private _certificados = signal<CertificadosPorCategoria>(
    this.inicializarCertificados()
  );
  private _categoriaSeleccionada = signal<string>('Todos');
  public categorias = computed((): string[] => [
    'Todos',
    ...Object.keys(this._certificados()),
  ]);

  get categoriaSeleccionada() {
    return this._categoriaSeleccionada();
  }
  // Getter para acceder a los certificados desde el template
  get certificados(): CertificadosPorCategoria {
    return this._certificados();
  }

  setCategoria(categoria: string) {
    this._categoriaSeleccionada.set(categoria);
  }

  public certificadosFiltrados = computed(() => {
    const categoria = this._categoriaSeleccionada();
    const certificados = this._certificados();
    if (categoria === 'Todos') {
      // Unir todos los arrays de certificados
      return Object.values(certificados).flat();
    }
    return certificados[categoria] || [];
  });

  private inicializarCertificados(): CertificadosPorCategoria {
    return {
      Angular: [
        {
          id: 1,
          titulo: 'Curso Angular 17',
          plataforma: 'Platzi',
          fecha: 'Enero 2024',
          imagen: 'assets/images/Angular/diploma-angular.jpg',
          categoria: 'Angular',
        },
        {
          id: 2,
          titulo: 'Curso Angular con Tailwind',
          plataforma: 'Platzi',
          fecha: 'Enero 2024',
          imagen: 'assets/images/Angular/diploma-angular-tailwind.jpg',
          categoria: 'Angular',
        },
        {
          id: 3,
          titulo: 'Curso Angular con Tailwind',
          plataforma: 'Platzi',
          fecha: 'Enero 2024',
          imagen: 'assets/images/Angular/diploma-angular-tailwind.jpg',
          categoria: 'Angular',
        },
      ],
      BaseDeDatos: [
        {
          id: 4,
          titulo: 'Base de Datos',
          plataforma: 'Platzi',
          fecha: 'Marzo 2023',
          imagen: 'assets/images/BaseDeDatos/diploma-bd.jpg',
          categoria: 'BaseDeDatos',
        },
        {
          id: 5,
          titulo: 'MySQL y MariaDB',
          plataforma: 'Platzi',
          fecha: 'Abril 2023',
          imagen: 'assets/images/BaseDeDatos/diploma-mysql-mariadb.jpg',
          categoria: 'BaseDeDatos',
        },
        {
          id: 6,
          titulo: 'Oracle Database - Curso',
          plataforma: 'Oracle Academy',
          fecha: 'Diciembre 2023',
          imagen: 'assets/images/BaseDeDatos/JoseFloresDataBaseOracle.jpg',
          categoria: 'BaseDeDatos',
        },
        {
          id: 7,
          titulo: 'Oracle Database - Examen',
          plataforma: 'Oracle Academy',
          fecha: 'Diciembre 2023',
          imagen: 'assets/images/BaseDeDatos/JoseFloresBaseDeDatosOracleExamen.jpg',
          categoria: 'BaseDeDatos',
        },
      ],
      Java: [
        {
          id: 8,
          titulo: 'Java Fundamentals - Examen',
          plataforma: 'Oracle Academy',
          fecha: 'Diciembre 2023',
          imagen: 'assets/images/JAVA/JoseFloresJavaFundamentals.jpg',
          categoria: 'Java',
        },
        {
          id: 9,
          titulo: 'Java Fundamentals - Curso',
          plataforma: 'Oracle Academy',
          fecha: 'Mayo 2023',
          imagen: 'assets/images/JAVA/JoseFloresOracleJavaFundamentals.jpg',
          categoria: 'JAVA',
        },
        {
          id: 10,
          titulo: 'Introducción a Java SE',
          plataforma: 'Platzi',
          fecha: 'Septiembre 2020',
          imagen: 'assets/images/JAVA/diploma-java-basico.jpg',
          categoria: 'JAVA',
        },
        {
          id: 11,
          titulo: 'Java SE Orientado a Objetos',
          plataforma: 'Platzi',
          fecha: 'Noviembre 2023',
          imagen: 'assets/images/JAVA/diploma-java-oop.jpg',
          categoria: 'JAVA',
        },
        {
          id: 12,
          titulo: 'Programación Orientada a Objetos con Java',
          plataforma: 'TODO CODE Academy',
          fecha: 'Julio 2024',
          imagen: 'assets/images/JAVA/CursoPOOJavaTodoCode.jpg',
          categoria: 'JAVA',
        },
        {
          id: 13,
          titulo: 'Java SE Persistencia de Datos',
          plataforma: 'Platzi',
          fecha: 'Noviembre 2023',
          imagen: 'assets/images/JAVA/diploma-java-persistencia.jpg',
          categoria: 'JAVA',
        },
        {
          id: 14,
          titulo: 'JAVA SE: SQL y Bases de Datos',
          plataforma: 'Platzi',
          fecha: 'Noviembre 2023',
          imagen: 'assets/images/JAVA/diploma-java-sql.jpg',
          categoria: 'JAVA',
        },
        {
          id: 15,
          titulo: 'Microservicios con Spring Cloud',
          plataforma: 'Platzi',
          fecha: 'Septiembre 2024',
          imagen: 'assets/images/JAVA/diploma-microservicios.jpg',
          categoria: 'JAVA',
        },
        {
          id: 16,
          titulo: 'Testing en JAVA',
          plataforma: 'Platzi',
          fecha: 'Noviembre 2023',
          imagen: 'assets/images/JAVA/diploma-testing-java.jpg',
          categoria: 'BaseDeDatos',
        },
      ],
      'Html - CSS': [
        {
          id: 17,
          titulo: 'CSS Grid Básico',
          plataforma: 'Platzi',
          fecha: 'Abril 2023',
          imagen: 'assets/images/HtmlCss/diploma-css-grid.jpg',
          categoria: 'Html - Css',
        },
        {
          id: 18,
          titulo: 'Diseño web con CSS Grid y Flexbox',
          plataforma: 'Platzi',
          fecha: 'Abril 2023',
          imagen: 'assets/images/HtmlCss/diploma-flexbox-css-grid.jpg',
          categoria: 'Html - Css',
        },
        {
          id: 19,
          titulo: 'Responsive Design: Maquetación Mobile First',
          plataforma: 'Platzi',
          fecha: 'Junio 2021',
          imagen: 'assets/images/HtmlCss/diploma-mobile-first.jpg',
          categoria: 'Html - Css',
        },
        {
          id: 20,
          titulo: 'Maquetación en CSS',
          plataforma: 'Platzi',
          fecha: 'Agosto 2020',
          imagen: 'assets/images/HtmlCss/diploma-practico-css.jpg',
          categoria: 'Html - Css',
        },
        {
          id: 21,
          titulo: 'Fundamentos de SASS',
          plataforma: 'Platzi',
          fecha: 'Noviembre 2023',
          imagen: 'assets/images/HtmlCss/diploma-sass.jpg',
          categoria: 'Html - Css',
        },
        {
          id: 22,
          titulo: 'Tailwind CSS',
          plataforma: 'Platzi',
          fecha: 'Abril 2023',
          imagen: 'assets/images/HtmlCss/diploma-tailwind.jpg',
          categoria: 'BaseDeDatos',
        },
      ],
    };
  }
}
