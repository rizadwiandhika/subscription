import { ApolloClient, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'

const httpLink = new HttpLink({
  uri: 'https://boss-gelding-10.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'il1ApMjS9BUc55GKzLyc7dWN1Y6VRmt2xHo7dTeZILd1TYZb9RvX4yMQgBfD4P6x'
  }
})

const wsLink = new WebSocketLink({
  uri: 'wss://boss-gelding-10.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':
          'il1ApMjS9BUc55GKzLyc7dWN1Y6VRmt2xHo7dTeZILd1TYZb9RvX4yMQgBfD4P6x'
      }
    }
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
})

export default client
