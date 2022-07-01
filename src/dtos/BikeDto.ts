interface BikeDTO {
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
    velocidade: string,
  },
}

export interface BikeDetailsDTO extends BikeListDTO {
  caracteristicas: {
    material: string,
    materialDescricao: string,
    motor: string,
    motorDescricao: string,
    outros: string,
    outrosDescricao: string,
    velocidade: string,
    velocidadeDescricao: string,
  },
  fichaTecnica: {
    altura: string,
    largura: string,
    marchas: string,
    peso: string,
    profundidade: string,
    roda: string,
  }
}