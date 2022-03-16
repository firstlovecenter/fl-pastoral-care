import fs from 'fs'
import path from 'path'

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

const services = fs
  .readFileSync(path.join(__dirname, 'services.graphql'))
  .toString('utf-8')

const membership = fs
  .readFileSync(path.join(__dirname, 'membership.graphql'))
  .toString('utf-8')

export default `${schema} ${directory} ${directorySonta} ${services} ${membership}`
