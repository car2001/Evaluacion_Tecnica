const UserList = ({users, setUsers}) => {
    
    const onDeleteUser = (item) => {
        const confirmDelete = window.confirm("¿Estás seguro que deseas eliminar este usuario?");
        if (!confirmDelete) return;

        const data = users.filter(user => user.id !== item);
        setUsers(data);
    };
    
    return(
        <div className="userlist">
            {users.map(
                user => 
                    <div>
                        <li key={user.id}>{user.name} - {user.email} - {user.telefono}</li>
                        <button onClick={() => onDeleteUser(user.id)}>❌</button>
                    </div>
            )}
        </div>
    )
}

export default UserList;