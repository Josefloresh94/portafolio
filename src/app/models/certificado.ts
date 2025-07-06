export interface Certificado {
  id: number;
  titulo: string;
  plataforma: string;
  fecha: string;
  imagen: string;
  categoria: string;
}

export interface CertificadosPorCategoria {
  [categoría: string]: Certificado[];
}
