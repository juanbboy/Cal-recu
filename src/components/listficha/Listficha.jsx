import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './listficha.css';

export const Listficha = () => {
    const navigate = useNavigate()
    const [datos, setdatos] = useState(0)
    const [search, setSearch] = useState()

    useEffect(() => {
        leer()
    }, []);


    const leer = () => {

        axios.get('https://cal-rec.vercel.app/api/ficha').then((res) => {
            setdatos(res.data.reverse())
        })
    }

    const Abrir = (data) => {
        navigate(`/edit-ficha/${data._id}`)
    }

    const handleSubmit = async (id) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`https://cal-rec.vercel.app/api/delficha/${id}`)
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
                leer()
            }
        })
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? datos : datos.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()) || dato.date.toLowerCase().includes(search.toLocaleLowerCase()))


    if (!datos) return null;

    return (
        <div className="row w-100">
            <div className="col-md-12">
                <form >
                    <div className='caja'>
                        <div className="row mb-3 justify-content-center">
                            <div className="col-2">
                                <label htmlFor="inputext" className="col-form-label"><h5>Search</h5></label>
                            </div>
                            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control' />
                        </div>
                    </div>
                </form >
                <Table striped hover size="sm" responsive="sm" className="table table-striped table-xs">
                    <thead className="thead-dark">
                        <tr>
                            <th>DATE</th>
                            <th>MACHINE</th>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {results.map(datos =>
                            <tr>
                                <td>{datos.date}</td>
                                <td>{datos.tipo}</td>
                                <td>{datos.name}</td>
                                <td className='text-center'>
                                    <button className="btn btn-info py-0 px-2 " onClick={Abrir.bind(this, datos)}>ver</button>
                                    <svg className='icon bi bi-trash3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onClick={handleSubmit.bind(this, datos._id)}>

                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table >
            </div >
        </div >
    )
}

export default Listficha