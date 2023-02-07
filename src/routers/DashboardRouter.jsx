import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menegato from '../components/menegato/Menegato'
import Omm from '../components/omm/Omm'
import Navbar from '../components/ui/Navbar'

const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Omm />} />
                        <Route path="/omm" element={<Omm />} />
                        <Route path="/menegato" element={<Menegato />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default DashboardRouter
