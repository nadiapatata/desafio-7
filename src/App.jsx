import React, { useState } from 'react';
import UserForm from './UserForm'; 
import UserList from './UserList'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';

const App = () => { const [users, setUsers] = useState([]); 
const addUser = async (newUser) => { 

// Agregar nuevo usuario al estado 
try { 
const response = await fetch('https://665782305c36170526451340.mockapi.io/users', { 
method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 }, body: JSON.stringify(newUser), });
 if (response.ok) {

 // Obtener la respuesta y agregar usuario al estado const data = await response.json();
 setUsers([...users, data]); 
} else { 
console.error('Error al agregar usuario');
}} catch (error) { 
console.error('Error en la solicitud: ', error);
 }
 }; 
return ( 
<div>
  
<h1 class='fs-3 bg-info-subtle mx-auto p-3 text-dark'>Lista de Usuarios</h1>
 
 <UserForm addUser={addUser} /> 
{/* Mostrar lista de usuarios /} 
{/ <ul> 
{users.map((user, index) => ( 
<li key={index}>{user.name} - {user.email}</li> 
))}
 </ul> */}
 <UserList />
 </div>
 ); 
}; 
export default App;