export interface BikeDTO {
  id: string;
  nome: string;
  preco: string;
  slug: string;
  alt: string;
}

export interface BikeHomeDTO extends BikeDTO {
  fotoHome: string;
}

export interface BikeListDTO extends BikeDTO {
  foto: string;
  descricao: string,
  caracteristicas: {
    material: string,
    motor: string,
    outros: string,
    velocidade: number,
  },
}