import { GetUserMetricsUseCase } from '../get-user-metrics'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeGetUserMetricsUseCase() {
  const checkIns = new PrismaCheckInsRepository()
  const useCase = new GetUserMetricsUseCase(checkIns)

  return useCase
}
