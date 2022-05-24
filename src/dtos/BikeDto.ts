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