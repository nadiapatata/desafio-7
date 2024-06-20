import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';

const UserForm = ({ addUser }) =>{
const [name, setName] = useState(''); 
const [email, setEmail] = useState('');

const handleSubmit = () => {
// Validar datos antes de agregar
const newUser = { name, email };
// Llamar a la función desde las props para agregar usuario
addUser(newUser);
};

return (
    <div class='container'>
<div class='rounded-4 bg-info-subtle m-5 p-5  row justifycontent-center col-6 mx-auto '>
<h2 class=' text-dark'>Agregar Usuario</h2>
<label class='m-2 fw-bold text-dark'>Nombre: </label>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
<br />
<label class='m-2 fw-bold text-dark'>Email: </label>
<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
<br />
<button class="btn btn-outline-dark mt-3 col-6 mx-auto rounded-pill" onClick={handleSubmit}>Agregar</button>
</div>

</div>
);
};
 
export default UserForm;