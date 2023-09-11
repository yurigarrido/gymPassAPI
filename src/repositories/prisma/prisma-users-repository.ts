import { Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { prisma } from '@/lib/prisma'

export class PrismaUsersRepository implements UsersRepository{
  findById(id: string) {
    throw new Error('Method not implemented.')
  }
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
