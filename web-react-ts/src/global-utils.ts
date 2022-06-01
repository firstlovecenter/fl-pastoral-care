import { ChurchLevelEnum } from './hooks/useClickCard'

export const getHigherChurchLevel = (level: ChurchLevelEnum) => {
  switch (level) {
    case 'Bacenta':
      return 'Constituency'
    case 'Constituency':
      return 'Council'
  }
}
