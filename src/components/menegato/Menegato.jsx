import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'

const Menegato = () => {
    const velmotor = 1800
    const dhuso = 25
    const costpolea = 3
    const reduc = 400
    const constvel = 11
    const [rpmhuso, setRpmhuso] = useState(0)
    const [rpmhusos, setRpmhusos] = useState(0)
    const [reductor, setReductor] = useState(0)
    const [velcrom, setVelcrom] = useState(0)
    const [velest, setVelest] = useState(0)
    const [velreco, setVelreco] = useState(0)
    const [tpminf, setTpminf] = useState(0)
    const [tpmsup, setTpmsup] = useState(0)
    const [velfinalc, setVelfinalc] = useState(0)
    const [almaa, setAlmaa] = useState(0)
    const [titfin, setTitfin] = useState(0)
    const [formValues, handleInputChange, reset] = useForm({
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
        trece: '',
        catorce: '',
        quince: '',
        diesiseis: '',
        tspand: '',
        tnylonext: '',
        tnylonint: '',
        psup: '',
        pinf: '',
        puestos: ''
    });
    const { uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, tspand, tnylonext, tnylonint, psup, pinf, puestos } = formValues;

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
        //console.log(e.target.value, e.target.name, pinf)
    }

    const titulofinal = () => {
        setTitfin((tspand / velest) + tnylonext)
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
        setVelcrom((radmin * radio).toFixed(2))
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
        setVelest((radmin * radio).toFixed(2))
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



    return (
        <div className='p-4 align-items-center'>
            <form onSubmit={handleRegister}>
                <div className='row text-center'>
                    <div className='col-6 '>
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
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="uno"
                                    value={uno}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="dos"
                                    value={dos}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="tres"
                                    value={tres}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="cuatro"
                                    value={cuatro}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2'>
                                {velreco}
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="cinco"
                                    value={cinco}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="seis"
                                    value={seis}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="siete"
                                    value={siete}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
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
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="nueve"
                                    value={nueve}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="diez"
                                    value={diez}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="once"
                                    value={once}
                                    onChange={event}
                                    required={true}
                                />
                            </div>
                            <div className='col-2 '>
                                <input
                                    type="text"
                                    className="in"
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
                                <div className='col-3 text-center'>RPM INTERIOR </div>
                            </div>
                            <div className='row'>
                                <div className='col-3 p-2 text-center'>
                                    <input
                                        type="text"
                                        className="in"
                                        id="exampleInputname"
                                        name="psup"
                                        value={psup}
                                        onChange={event}
                                        required={true}
                                    /></div>
                                <div className='col-3 p-2'>
                                    <input
                                        type="text"
                                        className="in"
                                        id="exampleInputname"
                                        name="pinf"
                                        value={pinf}
                                        onChange={event}
                                        required={true}
                                    />
                                </div>
                                <div className='col-3 p-2'>{rpmhuso} </div>
                                <div className='col-3 p-2'>{rpmhusos}</div>
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
                    <div className='col-6 '>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Titulo Spandex </label>
                            </div>
                            <div className='col-4'>
                                <input
                                    type="text"
                                    className="in"
                                    id="exampleInputname"
                                    name="tspand"
                                    value={tspand}
                                    onChange={event}
                                //required={true}
                                />
                            </div>

                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Titulo Nylon Ext. </label>
                            </div>
                            <div className='col-4'> <input
                                type="text"
                                className="in"
                                id="exampleInputname"
                                name="tnylonext"
                                value={tnylonext}
                                onChange={event}
                            // required={true}
                            /></div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Titulo Nylon Int. </label>
                            </div>
                            <div className='col-4'> <input
                                type="text"
                                className="in"
                                id="exampleInputname"
                                name="tnylonint"
                                value={tnylonint}
                                onChange={event}
                            // required={true}
                            /></div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Nº de Puestos </label>
                            </div>
                            <div className='col-4'> <input
                                type="text"
                                className="in"
                                id="exampleInputname"
                                name="puestos"
                                value={puestos}
                                onChange={event}
                                required={true}
                            /></div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Estiro Alma</label>
                            </div>
                            <div className='col-4'>{almaa}</div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Prod. Grs/Hrs/Puesto </label>
                            </div>
                            <div className='col-4'>xxxxx</div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Produccion kg/dia </label>
                            </div>
                            <div className='col-4'>xxxxx</div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Tiempo Hrs/Kgs </label>
                            </div>
                            <div className='col-4'>xxxxx</div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Relacion de Recogida </label>
                            </div>
                            <div className='col-4'>xxxxx</div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Rendimiento Mts/Kgs </label>
                            </div>
                            <div className='col-4'>xxxxx</div>
                        </div>
                        <div className='row justify-content-center '>
                            <div className='col-4'>
                                <label htmlFor="inputext"
                                    className="col-form-label">Titulo Final del Hilo</label>
                            </div>
                            <div className='col-4'>xxxxx</div>
                        </div>

                    </div>
                </div>
                <div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Calcular</button>
                </div>
            </form>
        </div>
    )
}

export default Menegato