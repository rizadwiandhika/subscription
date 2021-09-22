import { gql } from '@apollo/client'

export const getDataListById = gql`
  query MyQuery($id: Int!) {
    anggota(where: { id: { _eq: $id } }) {
      nama
      umur
      jenis_kelamin
      id
    }
  }
`

export const getUser = gql`
  query MyQuery {
    anggota {
      nama
      umur
      jenis_kelamin
      id
    }
  }
`
