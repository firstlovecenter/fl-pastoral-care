import { createContext } from 'react'
import useClickCard, { CardType, ChurchLevelEnum } from '../hooks/useClickCard'
import { ContextProviderProps } from './context.types'

interface ChurchContextInterface {
  clickCard: (card: CardType) => void
  churchLevel: ChurchLevelEnum | string
  setChurchLevel: (level: ChurchLevelEnum) => void
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

export const ChurchContext = createContext<ChurchContextInterface>({
  clickCard: (card: CardType) => null,
  churchLevel: sessionStorage.getItem('churchLevel') ?? '',
  setChurchLevel: (level: ChurchLevelEnum) => null,
  church: sessionStorage.getItem('church')
    ? JSON.parse(sessionStorage.getItem('church') ?? '')
    : { church: '', subChurch: '' },
  memberId: '',
  gatheringServiceId: sessionStorage.getItem('gatheringServiceId') ?? '',
  streamId: sessionStorage.getItem('streamId') ?? '',
  councilId: sessionStorage.getItem('councilId') ?? '',
  constituencyId: sessionStorage.getItem('constituencyId') ?? '',
  bacentaId: sessionStorage.getItem('bacentaId') ?? '',
  fellowshipId: sessionStorage.getItem('fellowshipId') ?? '',
  sontaId: sessionStorage.getItem('sontaId') ?? '',
  ministryId: sessionStorage.getItem('ministryId') ?? '',
})

export const ChurchContextProvider = ({ children }: ContextProviderProps) => {
  const {
    clickCard,
    church,
    churchLevel,
    SetChurchLevel,
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

  const setChurchLevel = SetChurchLevel

  return (
    <ChurchContext.Provider
      value={{
        clickCard,
        setChurchLevel,
        churchLevel,
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
