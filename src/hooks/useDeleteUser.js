import { useMutation } from '@apollo/client'
import { getUser } from '../graphql/query'
import { DeleteUser } from '../graphql/mutation'

export default function useDeleteUser() {
  const [deleteUser, { loading: loadingDelete }] = useMutation(DeleteUser, {
    refetchQueries: [getUser]
  })
  return {
    deleteUser,
    loadingDelete
  }
}
