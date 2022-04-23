import { createContext } from 'react'
import useClickCard, { CardType } from '../hooks/useClickCard'
import { ContextProviderProps } from './context.types'

interface ChurchContextInterface {
  clickCard: (card: CardType) => void
  church: any
  memberId: string
  gatheringServiceId: string | null
  streamId: string
  councilId: string
  constituencyId: string
  bacentaId: string
  fellowshipId: string
  sontaId: string
  ministryId: string
}

const ChurchContext = createContext<ChurchContextInterface | null>(null)

export const ChurchContextProvider = ({ children }: ContextProviderProps) => {
  const {
    clickCard,
    church,
    memberId,
    gatheringServiceId,
    streamId,
    councilId,
    constituencyId,
    bacentaId,
    fellowshipId,
    sontaId,
    ministryId,
  } = useClickCard()

  return (
    <ChurchContext.Provider
      value={{
        clickCard,
        church,
        memberId,
        gatheringServiceId,
        streamId,
        councilId,
        constituencyId,
        bacentaId,
        fellowshipId,
        sontaId,
        ministryId,
      }}
    >
      {children}
    </ChurchContext.Provider>
  )
}
