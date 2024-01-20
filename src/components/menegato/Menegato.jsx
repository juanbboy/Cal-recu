import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Menegato = () => {
    const params = useParams()
    const navigate = useNavigate()
    const velmotor = 1800
    const dhuso = 25
    const costpolea = 3
    const reduc = 400
    const constvel = 11
    const [rpmhuso, setRpmhuso] = useState(0)
    const [rpmhusos, setRpmhusos] = useState(0)
    const [reductor, setReductor] = useState(0)
    const [velcrom, setVelcrom] = useState(0)
    const [velcroma, setVelcroma] = useState(0)
    const [velest, setVelest] = useState(0)
    const [velesti, setvelesti] = useState(0)
    const [velreco, setVelreco] = useState(0)
    const [tpminf, setTpminf] = useState(0)
    const [tpmsup, setTpmsup] = useState(0)
    const [velfinalc, setVelfinalc] = useState(0)
    const [titfin, setTitfin] = useState(0)
    const [titfina, setTitfina] = useState(0)
    const [almaa, setAlmaa] = useState(0)
    const [nylon, setNylon] = useState(0)
    const [spandex, setSpandex] = useState(0)
    const [nylon1, setNylon1] = useState(0)
    const [spandex1, setSpandex1] = useState(0)
    const [grhora, setGrhora] = useState(0)
    const [proddia, setProddia] = useState(0)
    const [tiempo, setTiempo] = useState(0)
    const [relcogida, setRelcogida] = useState(0)
    const [rendimiento, setRendimiento] = useState(0)
    const [saca, setSaca] = useState(0)
    const [paquete, setpaquete] = useState(0)
    const [datos, setdatos] = useState(0)
    const [esti, setesti] = useState(0)

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        tipo: 'Menegatto',
        modelo: '1500',
        tipohuso: 'M4',
        tipocarre: '140 X 76 X 36 X 30',
        capcarre: '380',
        huso: '25',
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
        puestos: '',
        alm: "",
        velcrom: "",
        velest: "",
        velreco: "",
        tpminf: "",
        tpmsup: "",
        rpmhuso: "",
        rpmhusos: "",
        titfin: "",
        tiempo: "",
        grhora: "",
        proddia: "",
        relcogida: "",
        rendimiento: "",
        spandex: "",
        nylon: "",
        cobertura: "Doble",
        trece: "",
        catorce: ""
    });
    const { name, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, tspand, tnylonext, tnylonint, psup, pinf, puestos, cobertura, capcarre, trece, catorce } = formValues;

    useEffect(() => {
        axios.get('https://cal-rec.vercel.app/api/recubrir').then((res) => {
            if (params.id != null) {
                cargar(res.data.find((datos) => datos._id === params.id))
            }
        })
    }, [params.id])


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
        console.log(formValues)
        console.log(almaa)
        formValues.velcrom = velcroma
        formValues.velest = velesti
        formValues.velreco = velreco
        formValues.tpminf = tpminf
        formValues.tpmsup = tpmsup
        formValues.titfin = titfina
        formValues.rpmhuso = rpmhuso
        formValues.rpmhusos = rpmhusos
        formValues.tiempo = tiempo
        formValues.grhora = grhora
        formValues.proddia = proddia
        formValues.relcogida = relcogida
        formValues.rendimiento = rendimiento
        formValues.spandex = spandex1
        formValues.nylon = nylon1
        handleInputChange(e)
    }

    const event = (e) => {
        if (formValues.cobertura === "Doble") {
            doble()
            console.log("doble")
        } else {
            sencilla()
            console.log("sencilla")
        }
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
        console.log(almaa)
        formValues.velcrom = velcroma
        formValues.velest = velesti
        formValues.velreco = velreco
        formValues.tpminf = tpminf
        formValues.tpmsup = tpmsup
        formValues.titfin = titfina
        formValues.rpmhuso = rpmhuso
        formValues.rpmhusos = rpmhusos
        formValues.tiempo = tiempo
        formValues.grhora = grhora
        formValues.proddia = proddia
        formValues.relcogida = relcogida
        formValues.rendimiento = rendimiento
        formValues.spandex = spandex1
        formValues.nylon = nylon1
    }

    const cargar = (datos) => {
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
        formValues.catorce = datos.catorce
        formValues.trece = datos.trece
        setdatos(datos)
    }

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`https://cal-rec.vercel.app/api/update-student/${params.id}`, formValues)
            .then(res => {
                console.log(res);
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Actualizado',
                    showConfirmButton: false,
                    timer: 1200
                })
                Swal.fire({
                    title: 'Crear Ficha ?',
                    text: "¡Deseas crear ficha!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Crear!'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        crear(formValues)
                    }
                })
                navigate("/list")
            })
    }

    const guardar = (e) => {
        axios.post(`https://cal-rec.vercel.app/api/regrecubrir`, formValues)
            // axios.post(`http://localhost:4002/api/regrecubrir`, formValues)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'correcto',
                    showConfimButton: false,
                    timer: 1200
                })
                Swal.fire({
                    title: 'Crear Ficha ?',
                    text: "¡Deseas crear ficha!",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Crear!'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        crear(formValues)
                    }
                })
                navigate("/list")
            })
    }

    const crear = (data) => {
        navigate(`/crear/${data.name}`)
    }


    const titulofinal = () => {
        setTitfina(titfin.toFixed(2))
        setNylon1((nylon).toFixed(2))
        setSpandex((100 - nylon))
        setSpandex1(spandex.toFixed(2))
        setGrhora(((velcrom * titfin * 60) / 9000).toFixed(3))
        setProddia((grhora * puestos * 24 / 1000).toFixed(3))
        setRendimiento((9000000 / titfin).toFixed(0))
        setTiempo((24 / proddia).toFixed(3))
        setRelcogida((velreco / velcrom).toFixed(3))
        setSaca((capcarre / (nylon * grhora)).toFixed(2))
        setpaquete((saca * grhora).toFixed(2))
    }

    const alma = () => {
        setAlmaa((velcrom / velest))
        setesti(almaa.toFixed(2))
        formValues.alm = (almaa.toFixed(2))
    }
    const recogida = () => {
        const rel1 = uno / dos
        const rel2 = tres / cuatro
        const velinter = rel1 * velfinalc
        const velfinal = rel2 * velinter
        const rads = velfinal * (((2 * 3.1416) / 1) * (1 / 60))
        const radmin = rads * 60
        const diametro = 125
        const dmetro = diametro / 1000
        const radio = dmetro / 2
        setVelreco((radmin * radio).toFixed(2))
    }
    const cromados = () => {
        const z1 = 22
        const z2 = 20
        const z3 = 20
        const z4 = 37
        const z = z1 / z2
        const zz = z3 / z4
        const velini1 = z * reductor
        const velini = zz * velini1
        const rel1 = cinco / seis
        const rel2 = siete / ocho
        const velinter = rel1 * velini
        setVelfinalc(rel2 * velinter)
        const rads = velfinalc * (((2 * 3.1416) / 1) * (1 / 60))
        const radmin = rads * 60
        const diametro = 72
        const dmetro = diametro / 1000
        const radio = dmetro / 2
        setVelcrom((radmin * radio))
        setVelcroma(velcrom.toFixed(2))
    }

    const tpm = () => {
        setTpminf((rpmhuso / velcrom).toFixed(0))
        setTpmsup((rpmhusos / velcrom).toFixed(0))
    }
    const estiro = () => {
        const z1 = 22
        const z2 = 74
        const z = z1 / z2
        const velini1 = z * reductor

        const rel1 = nueve / diez
        const rel2 = once / doce
        const velinter = rel1 * velini1
        const velfinal = rel2 * velinter

        const rel11 = 17 / 27
        const velinter1 = rel11 * velfinal
        const rads = velinter1 * (((2 * 3.1416) / 1) * (1 / 60))
        const radmin = rads * 60

        const diametro = 80
        const dmetro = diametro / 1000
        const radio = dmetro / 2
        setVelest((radmin * radio))
        setvelesti(velest.toFixed(2))
    }

    const rpm = () => {
        setRpmhuso((velmotor * (costpolea + Number(pinf)) / dhuso).toFixed(0))
        const temp = ((velmotor * pinf) / reduc)
        setReductor(temp / constvel)
        console.log(reductor)
    }

    const rpms = () => {
        setRpmhusos((velmotor * (costpolea + Number(psup)) / dhuso).toFixed(0))
    }

    const sencilla = () => {
        setTitfin(((Number(tspand) / almaa) + Number(tnylonext)))
        setNylon(Number(tnylonext) / titfin * 100)
    }

    const doble = () => {
        setTitfin(((Number(tspand) / almaa) + Number(tnylonext) + Number(tnylonint)))
        setNylon(((Number(tnylonext) + Number(tnylonint)) / titfin) * 100)
    }

    return (
        <div className=' align-items-center'>
            <form onSubmit={handleRegister}>
                <div className='row text-center justify-content-center'>
                    <div className='col-sm-6 left'>

                        <div className='row my-3 p-0'>
                            <div className='col-3 '>
                                <label htmlFor="inputext"
                                    className="col-form-label">Cobertura</label>
                            </div>
                            <select
                                value={cobertura}
                                onChange={event}
                                type="text"
                                className="col-3 p-0"
                                name="cobertura"
                                id="exampleInputname"
                                required={true}
                            >
                                <option value="Sencilla">Sencilla</option>
                                <option value="Doble">Doble</option>
                            </select>
                        </div>



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
                                    name="trece"
                                    value={trece}
                                    onChange={event}
                                // required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    name="catorce"
                                    value={catorce}
                                    onChange={event}
                                //required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    // name="tres"
                                    value={"N/A"}
                                // onChange={event}
                                //required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                <input
                                    type="text"
                                    className="in container"
                                    id="exampleInputname"
                                    //name="cuatro"
                                    value={"N/A"}
                                //onChange={event}
                                //required={true}
                                />
                            </div>
                            <div className='col-2 p-0'>
                                {"N/A"}
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
                                {velcroma}
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
                                {velesti}
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
                                            className="col-form-label">Spandex </label>
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
                                            className="col-form-label">Capacidad Carreta/grs </label>
                                    </div>
                                    <div className='col-6 cajain'> <input
                                        type="text"
                                        className="in container"
                                        id="exampleInputname"
                                        name="capcarre"
                                        value={capcarre}
                                        onChange={event}
                                    // required={true}
                                    /></div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Estiro Alma</label>
                                    </div>
                                    <div className='col-6'>{esti}</div>
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

                            </div>
                            <div className='col-sm-6 '>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">Tiempo Hrs/Kgs</label>
                                    </div>
                                    <div className='col-6'>{tiempo}</div>
                                </div>
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
                                    <div className='col-6'>{titfina}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">% Nylon</label>
                                    </div>
                                    <div className='col-6'>{nylon1}</div>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-6'>
                                        <label htmlFor="inputext"
                                            className="col-form-label">% Spandex</label>
                                    </div>
                                    <div className='col-6'>{spandex1}</div>
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
                        <div className='row text-center justify-content-center nam2 '>
                            <div className='col-6 nam '>Nombre</div>
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
                    <button className="buton btn btn-md btn-outline-primary" type="submit" onClick={event}>Calcular</button>
                    <button className="buton btn btn-md btn-outline-primary" onClick={guardar}>Guardar</button>
                    {params.id ? <button className="buton btn btn-md btn-outline-primary" onClick={update}>Actualizar</button> : ''}
                    {params.id ? <button className="buton btn btn-md btn-outline-primary" onClick={crear.bind(this, formValues)}>Crear Ficha</button> : ''}
                </div>
            </form >
        </div >
    )
}

export default Menegato