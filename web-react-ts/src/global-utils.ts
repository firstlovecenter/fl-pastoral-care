import { ChurchLevel } from 'types/global-types'

export const getHigherChurchLevel = (level: ChurchLevel) => {
  switch (level) {
    case 'Bacenta':
      return 'Constituency'
    case 'Constituency':
      return 'Council'
  }
}
