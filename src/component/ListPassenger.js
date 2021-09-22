import { useEffect } from 'react'
import ListItem from './ListItem'

import useDeleteUser from '../hooks/useDeleteUser'
import useGetUser from '../hooks/useGetUser'
import useUpdateUser from '../hooks/useUpdateTodo'

const ListPassenger = () => {
  const { anggota, loading, error, subscribeUser } = useGetUser()
  const { updateUser, loadingUpdate } = useUpdateUser()
  const { deleteUser, loadingDelete } = useDeleteUser()

  useEffect(() => {
    console.log('effect subscribe')
    subscribeUser()
  }, [subscribeUser])

  if (error) {
    return <h3>Ada yang bermasalah...</h3>
  }

  const hapusPengunjung = (id) => {
    deleteUser({ variables: { id } })
  }

  const editAnggota = async (id) => {
    const item = anggota.find((v) => v.id === id)
    const namaBaru = prompt('masukan nama', item.nama)

    if (namaBaru) updateUser({ variables: { id, nama: namaBaru } })
  }

  if (loading || loadingDelete || loadingUpdate) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: 'auto' }}>
        <thead bgcolor="red">
          <tr>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
        </thead>
        {anggota.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            data={item}
            editAnggota={() => editAnggota(item.id)}
            hapusPengunjung={() => hapusPengunjung(item.id)}
          />
        ))}
      </table>
    </div>
  )
}

export default ListPassenger
