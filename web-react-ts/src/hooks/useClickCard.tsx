import { useState } from 'react'
type GatheringService = {
  id: string
}

type Stream = {
  id: string
  gatheringService: GatheringService
}

type Council = {
  id: string
  stream: Stream
}

type Constituency = {
  id: string
  council: Council
}

type Bacenta = {
  id: string
  constituency: Constituency
}

type Fellowship = {
  id: string
  bacenta: Bacenta
}

export enum StreamEnum {
  Campus = 'Campus',
  Town = 'Town',
  Anagkazo = 'Anagkazo',
}

export enum ChurchEnum {
  Bacenta = 'Bacenta',
}

export enum ChurchLevelEnum {
  Bacenta = 'Bacenta',
  Constituency = 'Constituency',
  Council = 'Council',
  GatheringService = 'GatheringService',
}

export enum RolesEnum {
  leaderGatheringService = 'leaderGatheringService',
  leaderStream = 'leaderStream',
  leaderCouncil = 'leaderCouncil',
  leaderConstituency = 'leaderConstituency',
  leaderBacenta = 'leaderBacenta',
  leaderFellowship = 'leaderFellowship',
  adminConstituency = 'adminConstituency',
  adminCouncil = 'adminCouncil',
  adminStream = 'adminStream',
  adminGatheringService = 'adminGatheringService',
  all = 'all',
}

export type CardType = {
  __typename: string
  id: string
  name?: string
  link?: string
  stream_name: StreamEnum
  gatheringService?: { id: string }
  stream?: Stream
  council?: Council
  constituency?: Constituency
  bacenta?: Bacenta
  fellowship?: Fellowship
}

const useClickCard = () => {
  const [church, setChurch] = useState(
    sessionStorage.getItem('church')
      ? JSON.parse(sessionStorage.getItem('church') ?? '')
      : { church: '', level: '' }
  )

  const [gatheringServiceId, setGatheringServiceId] = useState(
    sessionStorage.getItem('gatheringServiceId' ?? '')
  )
  const [streamId, setStreamId] = useState(
    sessionStorage.getItem('streamId') ?? ''
  )

  const [councilId, setCouncilId] = useState(
    sessionStorage.getItem('councilId') ?? ''
  )

  const [constituencyId, setConstituencyId] = useState(
    sessionStorage.getItem('constituencyId') ?? ''
  )
  const [bacentaId, setBacentaId] = useState(
    sessionStorage.getItem('bacentaId') ?? ''
  )
  const [fellowshipId, setFellowshipId] = useState(
    sessionStorage.getItem('fellowshipId') ?? ''
  )

  const [sontaId, setSontaId] = useState(
    sessionStorage.getItem('sontaId') ?? ''
  )
  const [ministryId, setMinistryId] = useState(
    sessionStorage.getItem('ministryId') ?? ''
  )
  const [memberId, setMemberId] = useState(
    sessionStorage.getItem('memberId') ?? ''
  )

  const determineStream = (card: CardType) => {
    setChurch({
      church: card?.stream_name,
      name: card.name,
      level: card.__typename,
    })
    sessionStorage.setItem(
      'church',
      JSON.stringify({
        church: card?.stream_name,
        level: card.__typename,
      })
    )

    //Setting the Bacenta for the different levels under Bacenta
    switch (card.__typename) {
      case 'Fellowship':
        if (card?.bacenta?.id) {
          setBacentaId(card?.bacenta?.id)
          sessionStorage.setItem('bacentaId', card?.bacenta?.id)
        }
        break
      case 'Bacenta':
        if (card.id) {
          setBacentaId(card?.id)
          sessionStorage.setItem('bacentaId', card?.id)
        }

        break
      default:
        break
    }

    //Setting the Constituency for the different levels under Constituency
    switch (card.__typename) {
      case 'Fellowship':
        if (card?.bacenta?.constituency?.id) {
          setConstituencyId(card?.bacenta?.constituency?.id)
          sessionStorage.setItem(
            'constituencyId',
            card?.bacenta?.constituency?.id
          )
        }
        break
      case 'Bacenta':
        if (card?.constituency?.id) {
          setConstituencyId(card?.constituency?.id)
          sessionStorage.setItem('constituencyId', card?.constituency?.id)
        }
        break
      case 'Constituency':
        if (card?.id) {
          setConstituencyId(card?.id)
          sessionStorage.setItem('constituencyId', card?.id)
        }
        break

      default:
        break
    }

    //Setting the Council for the different levels under Council eg. Constituency, Bacenta...
    switch (card.__typename) {
      case 'Fellowship':
        if (card?.bacenta?.constituency?.council?.id) {
          setCouncilId(card?.bacenta?.constituency?.council?.id)
          sessionStorage.setItem(
            'councilId',
            card?.bacenta?.constituency?.council?.id
          )
        }
        break
      case 'Bacenta':
        if (card?.constituency?.council?.id) {
          setCouncilId(card?.constituency?.council?.id)
          sessionStorage.setItem('councilId', card?.constituency?.council?.id)
        }
        break
      case 'Constituency':
        if (card?.council?.id) {
          setCouncilId(card?.council?.id)
          sessionStorage.setItem('councilId', card?.council?.id)
        }
        break
      case 'Council':
        if (card.id) {
          setCouncilId(card.id)
          sessionStorage.setItem('councilId', card.id)
        }
        break
      case 'Ministry':
        if (card.id) {
          setMinistryId(card.id)
          sessionStorage.setItem('ministryId', card.id)
        }
        break
      default:
        break
    }

    //Setting the Stream for the different levels under Stream
    switch (card.__typename) {
      case 'Fellowship':
        if (card?.bacenta?.constituency?.council?.stream?.id) {
          setStreamId(card?.bacenta?.constituency?.council?.stream?.id)
          sessionStorage.setItem(
            'streamId',
            card?.bacenta?.constituency?.council?.stream?.id
          )
        }
        break
      case 'Bacenta':
        if (card?.constituency?.council?.stream?.id) {
          setStreamId(card?.constituency?.council?.stream?.id)
          sessionStorage.setItem(
            'streamId',
            card?.constituency?.council?.stream?.id
          )
        }
        break
      case 'Constituency':
        if (card?.council?.stream?.id) {
          setStreamId(card?.council?.stream?.id)
          sessionStorage.setItem('streamId', card?.council?.stream?.id)
        }
        break
      case 'Council':
        if (card?.stream?.id) {
          setStreamId(card?.stream?.id)
          sessionStorage.setItem('streamId', card?.stream?.id)
        }
        break
      case 'Stream':
        if (card.id) {
          setStreamId(card.id)
          sessionStorage.setItem('streamId', card.id)
        }
        break
      default:
        break
    }

    //Setting the GatheringService for the different levels under GatheringService
    switch (card.__typename) {
      case 'Fellowship':
        if (
          card?.bacenta?.constituency?.council?.stream?.gatheringService?.id
        ) {
          setGatheringServiceId(
            card?.bacenta?.constituency?.council?.stream?.gatheringService?.id
          )
          sessionStorage.setItem(
            'gatheringServiceId',
            card?.bacenta?.constituency?.council?.stream?.gatheringService?.id
          )
        }
        break
      case 'Bacenta':
        if (card?.constituency?.council?.stream?.gatheringService?.id) {
          setGatheringServiceId(
            card?.constituency?.council?.stream?.gatheringService?.id
          )
          sessionStorage.setItem(
            'gatheringServiceId',
            card?.constituency?.council?.stream?.gatheringService?.id
          )
        }
        break
      case 'Constituency':
        if (card?.council?.stream?.gatheringService?.id) {
          setGatheringServiceId(card?.council?.stream?.gatheringService?.id)
          sessionStorage.setItem(
            'gatheringServiceId',
            card?.council?.stream?.gatheringService?.id
          )
        }
        break
      case 'Council':
        if (card?.stream?.gatheringService?.id) {
          setGatheringServiceId(card?.stream?.gatheringService?.id)
          sessionStorage.setItem(
            'gatheringServiceId',
            card?.stream?.gatheringService?.id
          )
        }
        break
      case 'Stream':
        if (card?.gatheringService?.id) {
          setGatheringServiceId(card?.gatheringService?.id)
          sessionStorage.setItem(
            'gatheringServiceId',
            card?.gatheringService?.id
          )
        }
        break
      case 'GatheringService':
        if (card.id) {
          setGatheringServiceId(card?.id)
          sessionStorage.setItem('gatheringServiceId', card?.id)
        }
        break
      default:
        break
    }

    return
  }

  const clickCard = (card: CardType): void => {
    if (!card) {
      return
    }

    determineStream(card)

    switch (card.__typename) {
      case 'Member':
        setMemberId(card.id)
        sessionStorage.setItem('memberId', card.id)
        break
      case 'Sonta':
        setSontaId(card.id)
        sessionStorage.setItem('sontaId', card.id)
        break
      case 'Fellowship':
        setFellowshipId(card.id)
        sessionStorage.setItem('fellowshipId', card.id)
        break
      case 'Bacenta':
        setBacentaId(card.id)
        sessionStorage.setItem('bacentaId', card.id)
        break
      case 'Constituency':
        setConstituencyId(card.id)
        sessionStorage.setItem('constituencyId', card.id)
        break
      case 'Council':
        setCouncilId(card.id)
        sessionStorage.setItem('councilId', card.id)
        break
      case 'Stream':
        setStreamId(card.id)
        sessionStorage.setItem('streamId', card.id)
        break

      default:
        break
    }

    if (card.__typename === 'Basonta') {
      card.link = '/sonta/displaydetails'
    }

    if (card.link === '') {
      card.link = `/${card.__typename.toLowerCase()}/displaydetails`
    }
  }

  return {
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

    //Set State
    setGatheringServiceId,
    setChurch,
    setStreamId,
    setCouncilId,
    setConstituencyId,
  }
}

export default useClickCard
