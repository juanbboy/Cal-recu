import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState, Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Omm, { Recibo } from '../omm/Omm';
import { render } from 'react-dom';
export const UserContext = React.createContext();

export const Listado = () => {


    //const navigate = useNavigate()
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



    if (!datos) return null;

    return (
        <div className="row">
            <div className="col-md-12">
                <Table className="table table-striped table-xs">
                    <thead className="thead-dark">
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map(datos =>
                            <tr>
                                <td>{datos.date}</td>
                                <td>{datos.name}</td>

                                <td><button className="btn btn-info" onClick={Abrir.bind(this, datos)}>ver</button>
                                    <Link to="/omm">juan</Link> </td>
                            </tr>
                        )}
                    </tbody>
                </Table >
            </div >
        </div >
    )
}

export const Abrir = (iddata) => {
    //const navigate = useNavigate()
    const subdatos = iddata
    console.log("abrir")
    console.log(subdatos)
    console.log("abrir")
    localStorage.setItem("array", JSON.stringify(subdatos))
    Recibo(subdatos)
    console.log("navigate")
    // navigate("/omm")
}

export default Listado