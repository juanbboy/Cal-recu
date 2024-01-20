import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Listado from '../components/listado/Listado'
import Menegato from '../components/menegato/Menegato'
import Omm from '../components/omm/Omm'
import Navbarr from '../components/ui/Navbar'
import './daschboardrouter.css'
import Ficha from '../components/ficha/Ficha'
import Listficha from '../components/listficha/Listficha'
import Home from '../components/home/Home'
const DashboardRouter = () => {
    return (
        <>
            <Navbarr />
            <div className="lienzo d-flex justify-content-center">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/omm" element={<Omm />} />
                    <Route path="/menegato" element={<Menegato />} />
                    <Route path="/list" element={<Listado />} />
                    <Route path="/listficha" element={<Listficha />} />
                    <Route path="/edit-omm/:id" element={<Omm />} />
                    <Route path="/edit-menegato/:id" element={<Menegato />} />
                    <Route path="/crear/:name" element={<Ficha />} />
                    <Route path="/crear" element={<Ficha />} />
                    <Route path="/edit-ficha/:id" element={<Ficha />} />
                </Routes>

            </div>
        </>
    )
}

export default DashboardRouter
