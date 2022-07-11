import React, { useState } from 'react'


export const PagePagoPredial = () => {

  const [claveCatastro, setclaveCatastro] = useState('')
  const [showform, setshowform] = useState(false)
  const periodos = [
    {periodo: '2021', concepto: 'Predial', total: 19635.60},
    {periodo: '2020', concepto: 'Predial', total: 19635.60},
    {periodo: '2021', concepto: 'Predial', total: 19635.60},
    {periodo: '2022', concepto: 'Redondeo', total: 19635.60},
    {periodo: '2021', concepto: 'Descuento Predial', total: 19635.60},
    {periodo: '2021', concepto: 'Descuento Predial', total: 19635.60},
  ]

  const handleinputClave = (e) => {
    setclaveCatastro(e.target.value)
  }

  const handleshowForm = (e) => {
    e.preventDefault()
    claveCatastro !== '' ? setshowform(true) : setshowform(false)
  }
  
  
  return (
    <div className='conatiner mx-auto px-10 py-10'>
      <div className="shadow-2xl rounded-lg p-10">
        <h1 className="text-lg text-gray-600 sm:text-2xl">Predial</h1>
        <p className="text-lg text-gray-600 sm:text-2xl text-left mt-10">Ingrese clave catastral</p>

        <form className='flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 mt-5'>
          <input type="text" className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder='Clave catastral'
          onChange={handleinputClave}/>
          <button className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max" type='submit'
          onClick={handleshowForm}>
            Buscar
          </button>
        </form>

        {
          showform
          ? 
          <div className=''>
            <div className='grid grid-cols-2 gap-4'>
              <div className='shadow-2xl rounded-lg p-10 mt-10'>
                <h1 className=''>Contribuyente</h1>
                <div className="text-left">
                  <p>JIM Y VEN S.A DE C.V.</p>
                  <p>
                    DEPTO: 502 y CAJON DE ESTAC. 502, TERRAZA Y/0 PATIO DE SERV. 
                    Y ROOF GARDEN, COND. COSTA CARBALLO, No. EXT: ACAPULCO DE JUAREZ
                  </p>
                </div>
              </div>
              <div className='shadow-2xl rounded-lg p-10 mt-10'>
                <h1 className=''>Datos Padron</h1>
                <div className="text-left">
                  <p>Cuenta catastral: XXXXXXXXXXXXXXX</p>
                  <p className=''>
                    SUP. TERRENO; 192.86M2, TIPO PREDIO; URBANO CONSTRUIDO 
                    CALLE DEPTO: 502 y CAJON DE ESTAC. 502, TERRAZA Y/0 PATIO DE SERV. 
                    Y ROOF GARDEN, COND. COSTA CARBALLO, No. EXT: ACAPULCO DE JUAREZ
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-col-1">
              <div className='shadow-2xl rounded-lg p-10 mt-10'>
                <h1 className=''>Peridos de Pago</h1>
                <table className='table-fixed w-full mt-5'>
                  <thead>
                    <tr>
                      <th>Periodo</th>
                      <th>Concepto</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    { periodos.map(item => (
                      <tr>
                        <td>{item.periodo}</td>
                        <td>{item.concepto}</td>
                        <td>{`$ ${item.total}`}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td></td>
                      <td>Importe Total</td>
                      <td>{ `$ ${periodos.map(item=>item.total).reduce((a,b) => a+b, 0 )}`}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className='mt-10'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className="">
                    <button className='rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-10'>Pagar en Linea</button>
                  </div>
                  <div className="">
                    <button className="rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-10">Orden Desglozada</button>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          : 
          <div className=''>
          </div>
        }

      </div>
    </div>
  )
}
