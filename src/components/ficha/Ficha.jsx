import React, { useEffect, useState } from 'react'
import dugo from "../imagen1.png"
import axios from 'axios'
import "../ficha/ficha.css"
import { useForm } from '../../hooks/useForm'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const Ficha = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [datos, setdatos] = useState(0)
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    tipo: '',
    modelo: '',
    tipohuso: '',
    tipocarre: '',
    capcarre: '',
    huso: '',
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
    trece: "",
    catorce: "",
    tspand: '',
    tnylonext: '',
    tnylonint: '',
    psup: '',
    pinf: '',
    date: "",
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
    cobertura: "",
    nylontex: "Nylon texturizado",
    nylontexi: "Nylon texturizado",
    spantex: "Spandex Desnudo",
    torsion: "",
    cliente: "",
    opcion: "",
    descrip: "Spandex Recubierto",
    tipoe: "",
    tiponi: "",
    proveeni: "",
    proveene: "",
    tipos: "",
    provees: "",
    obs: "",
    elong: "",
    encog: ""
  });
  const { name, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, tspand, tnylonext, tnylonint, psup, pinf, puestos, tipo, date, alm, velcrom, velest, velreco, tpminf, tpmsup, rpmhuso, rpmhusos, titfin, tiempo, grhora, proddia, relcogida, rendimiento, spandex, nylon, modelo, tipohuso, tipocarre, capcarre, huso, cobertura, nylontex, nylontexi, spantex, torsion, cliente, opcion, descrip, tipoe, tiponi, proveeni, proveene, tipos, provees, elong, encog, obs } = formValues;


  useEffect(() => {
    axios.get('https://cal-rec.vercel.app/api/recubrir').then((res) => {
      console.log(res)
      if (params.name != null) {
        cargar(res.data.find((datos) => datos.name === params.name))
      }
    })
    axios.get('https://cal-rec.vercel.app/api/ficha').then((res) => {
      console.log(res)
      if (params.id != null) {
        cargar(res.data.find((datos) => datos._id === params.id))
      }
    })

  }, [params.name] || [params.id])

  const event = (e) => {
    handleInputChange(e)
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
    formValues.tipo = datos.tipo
    formValues.date = datos.date
    formValues.alm = datos.alm
    formValues.velcrom = datos.velcrom
    formValues.velest = datos.velest
    formValues.velreco = datos.velreco
    formValues.tpminf = datos.tpminf
    formValues.tpmsup = datos.tpmsup
    formValues.titfin = datos.titfin
    formValues.rpmhuso = datos.rpmhuso
    formValues.rpmhusos = datos.rpmhusos
    formValues.tiempo = datos.tiempo
    formValues.grhora = datos.grhora
    formValues.proddia = datos.proddia
    formValues.relcogida = datos.relcogida
    formValues.rendimiento = datos.rendimiento
    formValues.spandex = (datos.spandex * 100).toFixed(2)
    formValues.nylon = (datos.nylon * 100).toFixed(2)
    formValues.modelo = datos.modelo
    formValues.tipohuso = datos.tipohuso
    formValues.tipocarre = datos.tipocarre
    formValues.capcarre = datos.capcarre
    formValues.huso = datos.huso
    formValues.cobertura = datos.cobertura
    formValues.trece = datos.trece
    formValues.catorce = datos.catorce
    formValues.cliente = datos.cliente
    formValues.opcion = datos.opcion
    formValues.descrip = datos.descrip
    formValues.tipoe = datos.tipoe
    formValues.tiponi = datos.tiponi
    formValues.proveeni = datos.proveeni
    formValues.proveene = datos.proveene
    formValues.tipos = datos.tipos
    formValues.provees = datos.provees
    formValues.obs = datos.obs
    formValues.elong = datos.elong
    formValues.encog = datos.encog
    formValues.nylontex = datos.nylontex
    formValues.nylontexi = datos.nylontexi
    formValues.spantex = datos.spantex
    if (formValues.cobertura === "Sencilla") {
      formValues.torsion = "S - Z"
    } else { formValues.torsion = "Doble" }
    setdatos(datos)
  }

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`https://cal-rec.vercel.app/api/updateficha/${params.id}`, formValues)
      .then(res => {
        console.log(res);
        console.log(res.data);
        Swal.fire({
          icon: 'success',
          title: 'Actualizado',
          showConfirmButton: false,
          timer: 1200
        })
        navigate("/listficha")
      })
  }

  const guardar = (e) => {
    e.preventDefault()
    axios.post(`https://cal-rec.vercel.app/api/regficha`, formValues)
      // axios.post(`http://localhost:4002/api/regficha`, formValues)
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: 'correcto',
          showConfimButton: false,
          timer: 1200
        })
        navigate("/listficha")
      })
  }

  const print = () => {
    window.print()
  }

  // console.log(orientation.toString())
  // console.log(ori)
  if (window.matchMedia('(max-width:580px)').matches) return <h2>¡ Gira la pantalla !</h2>

  return (

    <div className='hoja' >
      <div className=' border border-dark  margen' >
        <div className="px-3 ">
          <div className="row border border-dark border d-flex justify-content-center align-items-center p-0">
            <div className='col'>
              <img src={dugo} alt="" />
            </div>
            <div className='col text-center border-dark border-end border-start'>
              <h4>FICHA DE MONTAJE RECUBRIMIENTO CONVENCIONAL</h4>
            </div>
            <div className="col text-center p-0">
              <div className='border-dark border-bottom'>CODIGO <br />
                M4-D-FT-07</div>
              <div >VERSIÓN 01</div>
            </div>
          </div>
        </div>

        <div className="row px-3 ">
          <div className='col-6'>
            <div className='row'>
              <div className="col-4">
                Referencia
              </div>
              <div className="col-5 border-bottom border-dark">
                {name}
              </div>
            </div>
          </div>
          <div className='col-6 '>
            <div className='row justify-content-center'>
              <div className="col-4 text-end">
                Cliente
              </div>
              <div className="col-3 border-bottom border-dark">
                <input
                  type="text"
                  className="border-0 col-12 p-0 text-center"
                  id="exampleInputname"
                  name="cliente"
                  value={cliente}
                  onChange={event}
                // required={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="row">
            <div className="col-sm-2 " >
              Opcion
            </div>
            <div className="col-sm-2 border-bottom border-dark">
              <input
                type="text"
                className="border-0 col-12 p-0 "
                id="exampleInputname"
                name="opcion"
                value={opcion}
                onChange={event}
              // required={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              Torsion
            </div>
            <div className="col-sm-2 border-bottom border-dark">
              {torsion}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              Recubrimiento
            </div>
            <div className="col-sm-2 border-bottom border-dark">
              {cobertura}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              Descipcion
            </div>
            <div className="col-sm-8 border-bottom border-dark text-center">
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="descrip"
                value={descrip}
                onChange={event}
              // required={true}
              />
            </div>
          </div>
        </div>

        <h5 className='text-center border border-dark my-2'>DATOS DE MONTAJE DE LA MAQUINA</h5>

        <div className=' p-3 '>
          <div class="row">
            <div className='col-sm-6'>
              <div class="row">
                <div className="col-sm-7">
                  Maquina
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {tipo}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Tipo de huso
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {tipohuso}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Tipo de carreta
                </div>
                <div className="col-sm-5 border-bottom border-dark">
                  {tipocarre}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Tiempo de carrete superior/Hrs
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {0}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Polea inferior
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {pinf}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Polea superior
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {psup}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Nº de puestos
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {puestos}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Tiempo Hrs/Kgs
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {tiempo}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Tiempo Enconado
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {0}
                </div>
              </div>
            </div>

            <div className='col-sm-6'>
              <div class="row">
                <div className="col-sm-7">
                  Modelo
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {modelo}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Polea de huso/mm
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {huso}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Capacidad de carreta/grs
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {capcarre}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Tiempo de carrete inferior/Hrs
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {0}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  RPM
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {rpmhuso}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  RPM
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {rpmhusos}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Prod. Grs/Hrs/Puesto
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {grhora}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Produccion (kg/dia)
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {proddia}
                </div>
              </div>
              <div class="row">
                <div className="col-sm-7">
                  Tiempo Encarretado
                </div>
                <div className="col-sm-3 border-bottom border-dark">
                  {0}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='m-5 px-2'>
          <table className="table table-bordered border-dark text-center p-0 ">
            <thead >
              <tr>
                <th scope="col" className='p-0'></th>
                <th scope="col" className='p-0 colum'>A</th>
                <th scope="col" className='p-0 colum'>B</th>
                <th scope="col" className='p-0 colum'>C</th>
                <th scope="col" className='p-0 colum'>D</th>
                <th scope="col" className='p-0 colum'>E</th>
                <th scope="col" className='p-0' >Vel.(m/min)</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <th scope="row " className='p-0'>GUIA HILO</th>
                <td className='p-0'>{trece}</td>
                <td className='p-0'>{catorce}</td>
                <td className='p-0'>N/A</td>
                <td className='p-0'>N/A</td>
                <td className='p-0'>N/A</td>
                <td className='p-0'>N/A</td>
              </tr>
              <tr>
                <th scope="row" className='p-0'>RECOGIDA</th>
                <td className='p-0'>{uno}</td>
                <td className='p-0'>{dos}</td>
                <td className='p-0'>{tres}</td>
                <td className='p-0'>{cuatro}</td>
                <td className='p-0'>N/A</td>
                <td className='p-0'>{velreco}</td>
              </tr>
              <tr>
                <th scope="row" className='p-0'>TORSION</th>
                <td className='p-0'>{cinco}</td>
                <td className='p-0'>{seis}</td>
                <td className='p-0'>{siete}</td>
                <td className='p-0'>{ocho}</td>
                <td className='p-0'>N/A</td>
                <td className='p-0'>{velcrom}</td>
              </tr>
              <tr>
                <th scope="row" className='p-0'>ESTIRAJE</th>
                <td className='p-0'>{nueve}</td>
                <td className='p-0'>{diez}</td>
                <td className='p-0'>{once}</td>
                <td className='p-0'>{doce}</td>
                <td className='p-0'>N/A</td>
                <td className='p-0'>{velest}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div >
          <h4 className='text-center border border-dark'>DATOS DEL HILO</h4>
        </div>

        <div className='p-3 '>
          <div className='row justify-content-between text-center py-2'>
            <div className='col-sm-2 p-0 '>
            </div>
            <div className='col-sm-4 mx-1 p-0 '>
              <b> Descripción</b>
            </div>
            <div className='col-sm-1 mx-1 p-0'>
              <b> Titulo</b>
            </div>
            <div className='col-sm-1 mx-1 p-0'>
              <b> Tipo</b>
            </div>
            <div className='col-sm-1 mx-1 p-0'>
              <b> Consumo</b>
            </div>
            <div className='col-sm-1 mx-1 p-0'>
              <b>  Proveedor</b>
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col-sm-2 p-0'>
              Alma
            </div>
            <div className='col-sm-4 border-bottom border-dark mx-1'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 "
                id="exampleInputname"
                name="spantex"
                value={spantex}
                onChange={event}
                required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center'>
              {tspand}
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="tipos"
                value={tipos}
                onChange={event}
                required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="spandex"
                value={spandex}
                onChange={event}
                required={true}

              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0' >
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="provees"
                value={provees}
                onChange={event}
                required={true}
              />
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col-sm-2 p-0'>
              Cobertura Interior
            </div>
            <div className='col-sm-4 border-bottom border-dark mx-1 '>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 "
                id="exampleInputname"
                name="nylontexi"
                value={nylontexi}
                onChange={event}
                required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center'>
              {tnylonint}
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="tiponi"
                value={tiponi}
                onChange={event}
                required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="nylon"
                value={nylon}
                onChange={event}
                required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="proveeni"
                value={proveeni}
                onChange={event}
                required={true}
              />
            </div>
          </div>
          <div className='row justify-content-between'>
            <div className='col-sm-2 p-0'>
              Cobertura Exterior
            </div>
            <div className='col-sm-4 border-bottom border-dark mx-1'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 "
                id="exampleInputname"
                name="nylontex"
                value={nylontex}
                onChange={event}
                required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center'>
              {tnylonext}
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="tipoe"
                value={tipoe}
                onChange={event}
              // required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="nylon"
                value={nylon}
                onChange={event}
                required={true}
              />
            </div>
            <div className='col-sm-1 border-bottom border-dark mx-1 text-center p-0'>
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="proveene"
                value={proveene}
                onChange={event}
              // required={true}
              />
            </div>
          </div>
        </div>


        <div className='px-5 py-3 '>
          <div class="row justify-content-center ">
            <div className="col-sm-3">
              Estiro Total Alma
            </div>
            <div className="col-sm-2 border-bottom border-dark text-center">
              {alm}
            </div>
            <div className="col-sm-3">
              Relacion de Recogida
            </div>
            <div className="col-sm-2 border-bottom border-dark text-center">
              {relcogida}
            </div>
          </div>
          <div class="row justify-content-center">
            <div className="col-sm-3">
              T.P.M Interior/m
            </div>
            <div className="col-sm-2 border-bottom border-dark text-center">
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="tpminf"
                value={tpminf}
                onChange={event}
                required={true}
              />
            </div>
            <div className="col-sm-3">
              T.P.M. Exterior/m
            </div>
            <div className="col-sm-2 border-bottom border-dark text-center">
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="tpmsup"
                value={tpmsup}
                onChange={event}
                required={true}
              />
            </div>
          </div>
          <div class="row justify-content-center">
            <div className="col-sm-3">
              Elongación %
            </div>
            <div className="col-sm-2 border-bottom border-dark">
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="elong"
                value={elong}
                onChange={event}
                required={true}
              />
            </div>
            <div className="col-sm-3">
              Rendimiento Mts/Kgs
            </div>
            <div className="col-sm-2 border-bottom border-dark text-center">
              {rendimiento}
            </div>
          </div>
          <div class="row justify-content-center">
            <div className="col-sm-3">
              Encogimiento  %
            </div>
            <div className="col-sm-2 border-bottom border-dark">
              <input
                type="text"
                className="border-0 col-sm-12 p-0 text-center"
                id="exampleInputname"
                name="encog"
                value={encog}
                onChange={event}
                required={true}
              />
            </div>
            <div className="col-sm-3">
              Titulo Final del Hilo
            </div>
            <div className="col-sm-2 border-bottom border-dark text-center">
              {titfin}
            </div>
          </div>
        </div>
        <div className="row px-3">
          <div className='col-sm border border-dark border-bottom-0 px-1'>
            <b>Observaciones: </b><input
              type="text"
              className="border-0 col-sm-10 p-0 "
              id="exampleInputname"
              name="obs"
              value={obs}
              onChange={event}
              required={true}
            />
          </div>
        </div>
        <div className="row px-3 ">
          <div className='col-sm-10 border border-dark border-right-0 justify-content-center d-flex align-items-center '>
            Desarrollo producto.
          </div>
          <div className="col-sm-2 px-0  ">
            <div className='border border-dark border-start-0 border-start-0 border-bottom-0 text-center'><b>Fecha</b></div>
            <div className='col-sm border border-dark border-start-0 text-center'>{date}</div>
          </div>
        </div>


      </div >
      <div className='p-3 text-center'>
        <button className="buton btn btn-md btn-outline-primary m-1" onClick={guardar}>Guardar</button>
        <button className="buton btn btn-md btn-outline-primary" onClick={print}>To PDF</button>
        {params.id ? <button className="buton btn btn-md btn-outline-primary m-1" onClick={update}>Actualizar</button> : ''}
      </div>
    </div>

  )
}

export default Ficha