import { gql } from '@apollo/client'

export const DeleteUser = gql`
  mutation MyMutation($id: Int!) {
    delete_anggota_by_pk(id: $id) {
      id
    }
  }
`

export const InsertUser = gql`
  mutation MyMutation($object: anggota_insert_input!) {
    insert_anggota_one(object: $object) {
      id
    }
  }
`

export const UpdateUser = gql`
  mutation MyMutation($id: Int!, $nama: String!) {
    update_anggota_by_pk(pk_columns: { id: $id }, _set: { nama: $nama }) {
      id
    }
  }
`
