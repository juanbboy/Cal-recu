import React from 'react'
import omm from "../omm.jpg"
import logo from "../logo.png"
const Home = () => {
    return (
        <div>
            <div className='container p-3'>
                <img src={logo} alt="" />
            </div>
            <div className='p-5'>
                <img src={omm} alt="" />
            </div>
        </div>
    )
}

export default Home