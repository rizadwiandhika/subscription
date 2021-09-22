import { useState } from 'react'
import './Home.css'
import useInsertUser from '../hooks/useInsertUser'

function PassengerInput() {
  const { insertUser, loadingInsert } = useInsertUser()

  const [nama, setNama] = useState('')
  const [umur, setUmur] = useState('')
  const [jenis_kelamin, setJenisKelamin] = useState('')
  const [editing, setEditing] = useState(true)

  const onChangeNama = (e) => {
    if (e.target) {
      setNama(e.target.value)
    }
  }
  const onChangeUmur = (e) => {
    if (e.target) {
      setUmur(e.target.value)
    }
  }
  const onChangeGender = (e) => {
    if (e.target) {
      setJenisKelamin(e.target.value)
    }
  }

  const tambahPengunjung = (e) => {
    insertUser({
      variables: {
        object: {
          nama: nama,
          umur: umur,
          jenis_kelamin: jenis_kelamin
        }
      }
    })
  }

  const handleSubmit = (e) => {
    if (nama.trim() && umur && jenis_kelamin) {
      if (umur >= 75 || umur <= 12) {
        alert('Umur tidak sesuai')
      } else {
        const newData = {
          nama: nama,
          umur: umur,
          jenisKelamin: jenis_kelamin
          // id: userId,
        }
        tambahPengunjung(newData)

        setNama('')
        setUmur('')
        setJenisKelamin('')
        setTimeout(() => {
          alert('data berhasil diinput')
        }, 3000)
      }
    } else {
      alert('Data masih ada yang kosong')
    }
  }
  if (loadingInsert) {
    return <h3>Loading...</h3>
  }

  const handleBukaInput = () => {
    setEditing(false)
  }
  const handleTutupInput = () => {
    setEditing(true)
  }
  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none'
  }
  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          // value={nama}

          name={nama}
          onChange={onChangeNama}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          // value={umur}
          name={umur}
          onChange={onChangeUmur}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select
          onChange={onChangeGender}
          defaultValue="Laki-laki"
          name={jenis_kelamin}
        >
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: '10px' }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput
