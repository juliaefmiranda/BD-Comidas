import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.comidas.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const encontreUm = async (id) => {
    return await prisma.comidas.findUnique({
        where: { id: Number(id) }
    })
}