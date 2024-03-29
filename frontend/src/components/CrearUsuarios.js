import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const CrearUusuario = () => {

    const valorInicial = {
        nombre: '',
        apellido: '',
        edad: 18,
        telefono: 0,
        correo: ''
    }

    let {id} = useParams();

    const [ usuario, setUsuario] = useState(valorInicial);
    const [ subId, setSubId ] = useState(id);

    const CapturarDatos = (e) =>{
        const {name, value} = e.target;
        setUsuario({...usuario, [name]: value})
    }


    const guardarDatos = async(e) =>{
        e.preventDefault();
        console.log(usuario);

        //logica para la peticion post
        const newUser = {
            nombre : usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            correo: usuario.correo
        }

        await axios.post("http://localhost:4000/api/usuarios", newUser);

        setUsuario(...valorInicial);
    }

    //funcion para actualizar el usuario
    const actualizarUser = async (e) =>{
        e.preventDefault();
        const newUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            correo: usuario.correo
        }
        await axios.put("http://localhost:4000/api/usuarios/" + subId , newUser);
        setUsuario({...valorInicial});
        setSubId('')
    }

    //logica peticion a la api
    const obtenerUno = async (valorId) =>{
        const res = await axios.get("http://localhost:4000/api/usuarios/" + valorId);
        setUsuario({
            nombre: res.data.nombre,
            apellido: res.data.apellido,
            telefono: res.data.telefono,
            edad: res.data.edad,
            correo: res.data.correo
        });
    } 

    useEffect(()=>{
        if(subId === ''){
            obtenerUno(subId);
        }
    }, [subId]);


    return ( 
        <div className='col md-6 offset-md-3'>
            <div className='card card-body'>

                <form onSubmit={guardarDatos}>
                    <h2 className='text-center mb-3'>Crear Usuario</h2>
                    <div className='mb-3'>
                        <label>
                            Nombre:
                        </label>
                        <input type="text" className='form-control' placeholder='Ingresar el nombre del usuario' required name='nombre' value={usuario.nombre} onChange={CapturarDatos} />
                    </div>

                    <div className='mb-3'>
                        <label>
                            Apellido:
                        </label>
                        <input type="text" className='form-control' placeholder='Ingresar el apellido del usuario' required name='apellido' value={usuario.apellido} onChange={CapturarDatos} />
                    </div>

                    <div className='mb-3'>
                        <label>
                            Edad:
                        </label>
                        <input type="number" className='form-control' placeholder='Ingresar la edad del usuario' required name='edad' value={usuario.edad} onChange={CapturarDatos} />
                    </div>

                    <div className='mb-3'>
                        <label>
                            Telefono:
                        </label>
                        <input type="number" className='form-control' placeholder='Ingresar el telefono del usuario' required name='telefono' value={usuario.telefono} onChange={CapturarDatos} />
                    </div>

                    <div className='mb-3'>
                        <label>
                            Correo:
                        </label>
                        <input type="text" className='form-control' placeholder='Ingresar el correo del usuario' required name='correo' value={usuario.correo} onChange={CapturarDatos} />
                    </div>

                    <button className='btn btn-primary form-control'>Guardar Usuario</button>
                </form>

                <form onSubmit={actualizarUser}>
                    <button className='btn btn-danger form-control mt-2' >
                        Actualizar información
                    </button>
                </form>

            </div>
        </div>
     );
}
 
export default CrearUusuario;