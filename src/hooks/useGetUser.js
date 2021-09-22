import { useQuery } from '@apollo/client'
import { getUser } from '../graphql/query'
import { SubscriptionUser } from '../graphql/subscribe'

export default function useGetUser() {
  const { data, loading, error, subscribeToMore } = useQuery(getUser)
  const subscribeUser = () => {
    subscribeToMore({
      document: SubscriptionUser,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        console.log('subscription', data)
        return data
      }
    })
  }
  return {
    anggota: data ? data.anggota : [],
    loading,
    error,
    subscribeUser
  }
}
