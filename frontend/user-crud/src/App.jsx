
import './App.css'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import { useState } from 'react'

const data = [
  {
    id: "1",
    name: "Carlos",
    email: "cpingoaguilar@gmail.com",
    telefono: "933457246"
  }
]

function App() {

  const [users, setUsers] = useState(data);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <h1>Usuarios</h1>
      <div className="card">
        <button onClick={() => setShowForm(true)}>
          Agregar Usuario
        </button>
        {showForm ? (
          <UserForm
            setUsers={setUsers}
            users={users}
            setShowForm={setShowForm}
          />
        ) : (
          <UserList users={users} setUsers={setUsers} />
        )}
      </div>
    </>
  )
}

export default App
