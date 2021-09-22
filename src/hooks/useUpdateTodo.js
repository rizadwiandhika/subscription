import { useMutation } from '@apollo/client'
import { getUser } from '../graphql/query'
import { UpdateUser } from '../graphql/mutation'

export default function useUpdateUser() {
  const [updateUser, { loading: loadingUpdate }] = useMutation(UpdateUser, {
    refetchQueries: [getUser]
  })
  return {
    updateUser,
    loadingUpdate
  }
}
