import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import './omm.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';


export const Omm = () => {

    const velmotor = 3590
    const dhuso = 25
    const costpolea = 3
    const reduc = 400
    const constvel = 18.4
    const [rpmhuso, setRpmhuso] = useState(0)
    const [rpmhusos, setRpmhusos] = useState(0)
    const [reductor, setReductor] = useState(0)
    const [velcrom, setVelcrom] = useState(0)
    const [velest, setVelest] = useState(0)
    const [velreco, setVelreco] = useState(0)
    const [tpminf, setTpminf] = useState(0)
    const [tpmsup, setTpmsup] = useState(0)
    const [velfinalc, setVelfinalc] = useState(0)
    const [titfin, setTitfin] = useState(0)
    const [almaa, setAlmaa] = useState(0)
    const [nylon, setNylon] = useState(0)
    const [spandex, setSpandex] = useState(0)
    const [grhora, setGrhora] = useState(0)
    const [proddia, setProddia] = useState(0)
    const [tiempo, setTiempo] = useState(0)
    const [relcogida, setRelcogida] = useState(0)
    const [rendimiento, setRendimiento] = useState(0)
    const [saca, setSaca] = useState(0)
    const [paquete, setpaquete] = useState(0)
    const [datos, setdatos] = useState(0)
    const [dat, setdat] = useState(0)
    //  const [subdatos, setsubdatos] = useState(localStorage.getItem("array"))

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        tipo: 'omm',
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: '',
        seis: '',
        siete: '',
        ocho: '',
        nueve: '',
        diez: '',
        once: '',
        doce: '',
        tspand: '',
        tnylonext: '',
        tnylonint: '',
        psup: '',
        pinf: '',
        puestos: ''
    });
    const { name, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, tspand, tnylonext, tnylonint, psup, pinf, puestos } = formValues;

    useEffect(() => {
        if (leer()) {
            // if (vmaquina()) {
            //     cargar()
            // }
            cargar()
        }
    }, [dat],)


    const handleRegister = (e) => {
        e.preventDefault();
        rpm()
        rpms()
        cromados()
        estiro()
        recogida()
        tpm()
        alma()
        titulofinal()
    }

    const event = (e) => {
        handleInputChange(e)
        rpm()
        rpms()
        cromados()
        estiro()
        recogida()
        tpm()
        alma()
        titulofinal()
        console.log(formValues)
        //console.log(e.target.value, e.target.name, pinf)
        localStorage.clear();
    }

    const titulofinal = () => {
        setTitfin(((Number(tspand) / almaa) + Number(tnylonext)).toFixed(2))
        // const yd = ((9000 * 453.6) / (titfin * 0.3048 * 3))
        setNylon((tnylonext / titfin).toFixed(2))
        setSpandex((1 - nylon).toFixed(2))
        setGrhora(((velcrom * titfin * 60) / 9000).toFixed(2))
        setProddia((grhora * puestos * 24 / 1000).toFixed(2))
        setRendimiento((9000000 / titfin).toFixed(2))
        setTiempo((24 / proddia).toFixed(2))
        setRelcogida((velreco / velcrom).toFixed(2))
        setSaca((350 / (nylon * grhora)).toFixed(2))
        setpaquete((saca * grhora).toFixed(2))
    }

    const leer = () => {
        setdatos(JSON.parse(localStorage.getItem('array')))
        if (datos === null) {
            return (false)
        }
        return (true)
    }

    const vmaquina = () => {
        console.log(datos.tipo)
        if (datos.tipo === "omm") {
            return true
        }
        return false
    }

    const cargar = () => {
        // setdatos(JSON.parse(localStorage.getItem('array')))

        console.log("cargar")
        console.log(datos)
        formValues.uno = datos.uno
        formValues.dos = datos.dos
        formValues.tres = datos.tres
        formValues.cuatro = datos.cuatro
        formValues.cinco = datos.cinco
        formValues.seis = datos.seis
        formValues.siete = datos.siete
        formValues.ocho = datos.ocho
        formValues.nueve = datos.nueve
        formValues.diez = datos.diez
        formValues.once = datos.once
        formValues.doce = datos.doce
        formValues.psup = datos.psup
        formValues.pinf = datos.pinf
        formValues.tspand = datos.tspand
        formValues.tnylonext = datos.tnylonext
        formValues.tnylonint = datos.tnylonint
        formValues.puestos = datos.puestos
        formValues.name = datos.name
        setdat(1)
    }



    const guardar = (e) => {
        e.preventDefault();
        // if (isFormValid()) {
        // dispatch(startRegisterEmailPassword(name));
        //     axios.post(`http://localhost:4002/api/regrecubrir`, formValues)
        axios.post(`https://cal-rec.vercel.app/api/regrecubrir`, formValues)
            // axios.post(`https://bakend.vercel.app/api/regneedle`, formValues)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'correcto',
                    showConfimButton: false,
                    timer: 1200
                })
                reset();
                // navigate("/needlelist")
            })
    }


    const alma = () => {
        setAlmaa((velcrom / velest).toFixed(2))
    }
    const recogida = () => {
        const rel1 = uno / dos
        const rel2 = tres / cuatro
        const velinter = rel1 * velfinalc
        const velfinal = rel2 * velinter
        const rads = velfinal * (((2 * 3.1416) / 1) * (1 / 60))
        const radmin = rads * 60
        const diametro = 80
        const dmetro = diametro / 1000
        const radio = dmetro / 2
        setVelreco((radmin * radio).toFixed(2))
    }
    const cromados = () => {
        const rel1 = cinco / seis
        const rel2 = siete / ocho
        const velinter = rel1 * reductor
        setVelfinalc(rel2 * velinter)
        const rads = velfinalc * (((2 * 3.1416) / 1) * (1 / 60))
        const radmin = rads * 60
        const diametro = 72
        const dmetro = diametro / 1000
        const radio = dmetro / 2
        setVelcrom((radmin * radio).toFixed(2))
    }

    const tpm = () => {
        setTpminf((rpmhuso / velcrom).toFixed(0))
        setTpmsup((rpmhusos / velcrom).toFixed(0))
    }
    const estiro = () => {
        const rel1 = nueve / diez
        const rel2 = once / doce
        const velinter = rel1 * reductor
        const velfinal = rel2 * velinter

        const rel11 = 17 / 30
        const velinter1 = rel11 * velfinal
        const rads = velinter1 * (((2 * 3.1416) / 1) * (1 / 60))
        const radmin = rads * 60

        const diametro = 100
        const dmetro = diametro / 1000
        const radio = dmetro / 2
        setVelest((radmin * radio).toFixed(2))
    }

    const rpm = () => {
        setRpmhuso((velmotor * (costpolea + Number(pinf)) / dhuso).toFixed(0))
        const temp = ((velmotor * pinf) / reduc)
        setReductor(temp / constvel)
    }

    const rpms = () => {
        setRpmhusos((velmotor * (costpolea + Number(psup)) / dhuso).toFixed(0))
    }



    return (
        <div className=' align-items-center'>
            <form onSubmit={handleRegister}>
                <div className='row text-center justify-content-center'>
                    <div className='col-sm-6 left'>
                        <div className='row justify-content-center'>
                            <div className='col-2'>
                                A
                            </div>
                            <div className='col-2'>
                                B
                            </div>
                            <div className='col-2'>
                                C
                            </div>
                            <div className='col-2'>
                                D
                            </div>
                            <div className='col-2'>
                                RPM
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="uno"
                                    value={uno}
                                    onChange={event}
                                // required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="dos"
                                    value={dos}
                                    onChange={event}
                                //required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="tres"
                                    value={tres}
                                    onChange={event}
                                //required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="cuatro"
                                    value={cuatro}
                                    onChange={event}
                                //required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                {velreco}
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="cinco"
                                    value={cinco}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 p-0 '>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="seis"
                                    value={seis}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 p-0 '>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="siete"
                                    value={siete}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 p-0 '>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="ocho"
                                    value={ocho}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2'>
                                {velcrom}
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-2 p-0 '>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="nueve"
                                    value={nueve}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 p-0 '>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="diez"
                                    value={diez}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 p-0 '>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="once"
                                    value={once}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 p-0 '>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="doce"
                                    value={doce}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2'>
                                {velest}
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='p-3'><hr /></div>
                            <div className='row'>
                                <div className='col-3 text-center'>POLEA SUPERIOR </div>
                                <div className='col-3 text-center'>POLEA INFERIOR </div>
                                <div className='col-3 text-center'>RPM SUPERIOR </div>
                                <div className='col-3 text-center'>RPM INFERIOR </div>
                            </div>
                            <div className='row'>
                                <div className='col-3 p-2 text-center'>
                                    <input
                                        type="text"
                                        className="in container"
                                        id="exampleInputname"
                                        name="psup"
                                        value={psup}
                                        onChange={event}
                                        required={true}
                                    /></div>
                                <div className='col-3 p-2'>
                                    <input
                                        type="text"
                                        className="in container"
                                        id="exampleInputname"
                                        name="pinf"
                                        value={pinf}
                                        onChange={event}
                                        required={true}
                                    />
                                </div>
                                <div className='col-3 p-2'>{rpmhusos} </div>
                                <div className='col-3 p-2'>{rpmhuso}</div>
                            </div>
                            <div className='p-3'><hr /></div>
                            <div className='row'>
                                <div className='col-6 text-center'>TPM EXTERIOR </div>
                                <div className='col-6 text-center'>TPM INTERIOR </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 text-center'>{tpmsup} </div>
                                <div className='col-6 text-center'>{tpminf} </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 right'>
                        <div className='row text-center '>
                            <div className='col-sm-6 '>
                                <div className='row  '>
                                    <div className='col-6 justify-content-center'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Titulo Spandex </label>
                                    </div>
                                    <div className='col-6 cajain'>
                                        <input
                                            type="text"
                                            className="in container"
                                            id="exampleInputname"
                                            name="tspand"
                                            value={tspand}
                                            onChange={event}
                                        // required={true}
                                        />
                                    </div>

                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Titulo Nylon Ext. </label>
                                    </div>
                                    <div className='col-6 cajain'> <input
                                        type="text"
                                        className="in container"
                                        id="exampleInputname"
                                        name="tnylonext"
                                        value={tnylonext}
                                        onChange={event}
                                    // required={true}
                                    /></div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Titulo Nylon Int. </label>
                                    </div>
                                    <div className='col-6 cajain'> <input
                                        type="text"
                                        className="in container"
                                        id="exampleInputname"
                                        name="tnylonint"
                                        value={tnylonint}
                                        onChange={event}
                                    //required={true}
                                    /></div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Nº de Puestos </label>
                                    </div>
                                    <div className='col-6 cajain'> <input
                                        type="text"
                                        className="in container"
                                        id="exampleInputname"
                                        name="puestos"
                                        value={puestos}
                                        onChange={event}
                                    //required={true}
                                    /></div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Estiro Alma</label>
                                    </div>
                                    <div className='col-6'>{almaa}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Grs/Hrs/Puesto </label>
                                    </div>
                                    <div className='col-6'>{grhora}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Prod kg/dia </label>
                                    </div>
                                    <div className='col-6'>{proddia}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Tiempo Hrs/Kgs</label>
                                    </div>
                                    <div className='col-6'>{tiempo}</div>
                                </div>
                            </div>
                            <div className='col-sm-6 '>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Rel Recogida</label>
                                    </div>
                                    <div className='col-6'>{relcogida}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Rend Mts/Kgs</label>
                                    </div>
                                    <div className='col-6'>{rendimiento}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Titulo Final</label>
                                    </div>
                                    <div className='col-6'>{titfin}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">% Nylon</label>
                                    </div>
                                    <div className='col-6'>{nylon}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">% Spandex</label>
                                    </div>
                                    <div className='col-6'>{spandex}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Hr/saca</label>
                                    </div>
                                    <div className='col-6'>{saca}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">gr/cono</label>
                                    </div>
                                    <div className='col-6'>{paquete}</div>
                                </div>
                            </div>
                        </div>
                        <div className='row text-center justify-content-center p-3'>
                            <div className='col-6 nam'>Nombre</div>
                            <div className='col-6 nam1'>
                                <input
                                    type="text"
                                    className="name"
                                    id="exampleInputname"
                                    name="name"
                                    value={name}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center p-3'>
                    <button className="buton btn btn-md btn-outline-primary" type="submit">Calcular</button>

                    <button className="buton btn btn-md btn-outline-primary" onClick={guardar}>Guardar</button>

                    {/* <button className=" w-25 btn btn-lg btn-primary" onClick={leer}>Leer</button> */}
                    {/* <button className=" w-25 btn btn-lg btn-primary" onClick={cargar}>carga</button> */}
                </div>
            </form >
        </div >

    )
}



export default Omm