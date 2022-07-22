import { ChurchLevel } from 'types/global-types'

export const capitalise = (str: string) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1)
}

export const getHigherChurchLevel = (level: ChurchLevel) => {
  switch (level) {
    case 'Bacenta':
      return 'Constituency'
    case 'Constituency':
      return 'Council'
  }
}
