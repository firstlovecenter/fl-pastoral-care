module.exports = {
  client: {
    service: {
      name: 'fl-pastoral-care',
      url: 'http://localhost:4001/graphql',
    },
    includes: ['web-react-ts/src/**/*.ts', 'web-react-ts/src/**/*.tsx'],
    excludes: ['**/__tests__/**'],
  },
}
