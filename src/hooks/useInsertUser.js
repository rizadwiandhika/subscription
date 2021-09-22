import { useMutation } from '@apollo/client'
import { getUser } from '../graphql/query'
import { InsertUser } from '../graphql/mutation'

export default function useInsertUser() {
  const [insertUser, { loading: loadingInsert }] = useMutation(InsertUser, {
    refetchQueries: [getUser]
  })
  return {
    insertUser,
    loadingInsert
  }
}
