import React, { useEffect, useState } from 'react';
const UserList = () => {
const [users, setUsers] = useState([]);


 useEffect(() => {
// Llamar a la función para obtener la lista de usuarios
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
const response = await fetch('https://665782305c36170526451340.mockapi.io/users');
const data = await response.json();
setUsers(data);
} catch (error) {
console.error('Error en la solicitud:', error);
}
};

return (
<div class=' text-dark '>

<h1 class=' text-center bg-info-subtle fw-bold p-5'>Usuarios</h1>
{/* Mostrar lista de usuarios */}
<ul class='p-5 text-light fw-bold fs-5 list-unstyled'>
{users.map((user) => (
<li key={user.id}>{user.name} - {user.email} <button class="btn btn-dark btn-sm rounded-pill" onClick = {() => handleDeleteTask(index)}>Eliminar</button></li>

    
))}
</ul>
</div>
);
};

export default UserList;
