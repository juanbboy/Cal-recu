import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Listado from '../components/listado/Listado'
import Menegato from '../components/menegato/Menegato'
import Omm from '../components/omm/Omm'
import Navbarr from '../components/ui/Navbar'
import './daschboardrouter.css'


const DashboardRouter = () => {
    return (
        <>
            <Navbarr />
            <div className="lienzo">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Omm />} />
                        <Route path="/omm" element={<Omm />} />
                        <Route path="/menegato" element={<Menegato />} />
                        <Route path="/list" element={<Listado />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default DashboardRouter
