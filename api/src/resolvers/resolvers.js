const resolvers = {
  // Resolver Parameters
  // Object: the parent result of a previous resolver
  // Args: Field Arguments
  // Context: Context object, database connection, API, etc
  // GraphQLResolveInfo
  Member: {
    fullName: (source) => `${source.firstName} ${source.lastName}`,
  },
}
export default resolvers
