// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

const schema = fs
  .readFileSync(
    process.env.GRAPHQL_SCHEMA || path.join(__dirname, 'schema.graphql')
  )
  .toString('utf-8')

const directory = fs
  .readFileSync(path.join(__dirname, 'directory.graphql'))
  .toString('utf-8')

const directorySonta = fs
  .readFileSync(path.join(__dirname, 'directory-sonta.graphql'))
  .toString('utf-8')

const attendance = fs
  .readFileSync(path.join(__dirname, 'attendance.graphql'))
  .toString('utf-8')

const membership = fs
  .readFileSync(path.join(__dirname, 'directory-membership.graphql'))
  .toString('utf-8')

const services = fs
  .readFileSync(path.join(__dirname, 'services.graphql'))
  .toString('utf-8')

const array = [
  schema,
  directory,
  directorySonta,
  attendance,
  membership,
  services,
]

exports.typeDefs = array.join(' ')
