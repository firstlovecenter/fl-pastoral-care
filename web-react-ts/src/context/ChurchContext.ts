import { createContext } from 'react'
import { CardType } from '../hooks/useClickCard'

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

export const ChurchContext = createContext<ChurchContextInterface | null>(null)
