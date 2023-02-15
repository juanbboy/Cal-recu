import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState, Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './listado.css';

export const Listado = () => {


    const navigate = useNavigate()
    //const dispatch = useDispatch();

    const [datos, setdatos] = useState(0)



    useEffect(() => {
        leer()
    }, [datos]);


    const leer = () => {
        axios.get('http://localhost:4002/api/recubrir').then((res) => {
            // axios.get('https://needlecpd.herokuapp.com/api/needle').then((res) => {
            //axios.get('https://bakend.vercel.app/api/needle').then((res) => {
            setdatos(res.data)
        })
    }

    const Abrir = (data) => {
        //const subdatos = iddata
        console.log("abrir")
        console.log(data)
        console.log("abrir")
        localStorage.setItem("array", JSON.stringify(data))
        // Recibo()
        console.log("navigate")
        if (data.tipo === "omm") {
            navigate("/omm")
        }
        if (data.tipo === "menegato") {
            navigate("/menegato")
        }
    }

    const handleSubmit = async (id) => {
        console.log(id)
        // await axios.delete(`https://needlecpd.herokuapp.com/api/delneedle/${id}`)
        await axios.delete(`http://localhost:4002/api/delrecubrir/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado',
                    showConfimButton: false,
                    timer: 1200
                })
            })
    }


    if (!datos) return null;

    return (
        <div className="row">
            <div className="col-md-12">
                <Table className="table table-striped table-xs">
                    <thead className="thead-dark">
                        <tr>
                            <th>DATE</th>
                            <th>MACHINE</th>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map(datos =>
                            <tr>
                                <td>{datos.date}</td>
                                <td>{datos.tipo}</td>
                                <td>{datos.name}</td>

                                <td><button className="btn btn-info" onClick={Abrir.bind(this, datos)}>ver</button>
                                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" onClick={handleSubmit.bind(this, datos._id)}>
                                        {/* <button className="btn btn-info" onClick={Abrir.bind(this, datos)}>ver</button> */}
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />

                                    </svg>


                                    {/* <Link to="/omm">juan</Link> */}

                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table >
            </div >
        </div >
    )
}

export default Listado