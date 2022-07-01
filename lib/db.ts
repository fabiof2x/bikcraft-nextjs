import { prisma } from "./prisma";

export async function getAllBikes() {
  const bikes = await prisma.bicicletas.findMany();
  return bikes;
}

export async function getBikeBySlug() {
  const bikes = await prisma.bicicletas.findMany();
  return bikes;
}