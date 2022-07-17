import { createContext } from 'react'
import { ChurchLevel, StreamOptions } from 'types/global-types'
import useClickCard, { CardType } from '../hooks/useClickCard'
import { ContextProviderProps } from './context.types'

interface ChurchContextInterface {
  clickCard: (card: CardType) => void
  church: {
    stream: StreamOptions
    name: string
    level: ChurchLevel
  }

  memberId: string
  gatheringServiceId: string | null
  streamId: string
  councilId: string
  constituencyId: string
  bacentaId: string
  fellowshipId: string
  sontaId: string
  ministryId: string
  serviceRecordId: string
  bussingRecordId: string
}

export const ChurchContext = createContext<ChurchContextInterface>({
  clickCard: (card: CardType) => null,
  church: sessionStorage.getItem('church')
    ? JSON.parse(sessionStorage.getItem('church') ?? '')
    : { church: '', level: '' },
  memberId: '',
  gatheringServiceId: sessionStorage.getItem('gatheringServiceId') ?? '',
  streamId: sessionStorage.getItem('streamId') ?? '',
  councilId: sessionStorage.getItem('councilId') ?? '',
  constituencyId: sessionStorage.getItem('constituencyId') ?? '',
  bacentaId: sessionStorage.getItem('bacentaId') ?? '',
  fellowshipId: sessionStorage.getItem('fellowshipId') ?? '',
  sontaId: sessionStorage.getItem('sontaId') ?? '',
  ministryId: sessionStorage.getItem('ministryId') ?? '',
  serviceRecordId: sessionStorage.getItem('serviceRecordId') ?? '',
  bussingRecordId: sessionStorage.getItem('bussingRecordId') ?? '',
})

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
    serviceRecordId,
    bussingRecordId,
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
        serviceRecordId,
        bussingRecordId,
      }}
    >
      {children}
    </ChurchContext.Provider>
  )
}
