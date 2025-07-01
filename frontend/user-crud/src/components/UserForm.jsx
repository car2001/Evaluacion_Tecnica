import { useState } from "react";

const UserForm = ({users, setUsers, setShowForm}) => {
    const [newUser, setNewUser] = useState({ nombre: '' });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUserData = {
            name: newUser.name,
            email: newUser.email,
            telefono: newUser.telefono
        };

        setUsers([...users, newUserData]);
        setNewUser({ name: '' });
        setShowForm(false);
    };
    
    return(
        <form className="form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
            />
            <input
            type="text"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
            />
            <input
            type="text"
            placeholder="Telefono"
            value={newUser.telefono}
            onChange={(e) => setNewUser({ ...newUser, telefono: e.target.value })}
            required
            />
            <button type="submit">Guardar</button>
        </form>
    )
}


export default UserForm;