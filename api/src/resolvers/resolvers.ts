import { Member } from './utils/types'

const resolvers = {
  // Resolver Parameters
  // Object: the parent result of a previous resolver
  // Args: Field Arguments
  // Context: Context object, database connection, API, etc
  // GraphQLResolveInfo

  Member: {
    fullName: (source: Member) => `${source.firstName} ${source.lastName}`,
  },
  Sheep: {
    fullName: (source: Member) => `${source.firstName} ${source.lastName}`,
  },
  Goat: {
    fullName: (source: Member) => `${source.firstName} ${source.lastName}`,
  },
  Deer: {
    fullName: (source: Member) => `${source.firstName} ${source.lastName}`,
  },
  idl: {
    fullName: (source: Member) => `${source.firstName} ${source.lastName}`,
  },
}

export default resolvers
