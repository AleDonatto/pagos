import React, { useState } from 'react'
//import SampleOne from '.samples/SampleOne'



export const PagePagoPredial = () => {

  const [claveCatastro, setclaveCatastro] = useState('')
  const [showform, setshowform] = useState(false)
  const [pagoLinea, setpagoLinea] = useState(false)
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

  const handleshowPagoLinea = () => {
    setpagoLinea(true)
  }

  const handleCancelPagoLinea = () => {
    setpagoLinea(false)
  }
  
  const [toggle, setToggle] = useState(false) 

  return (
    <div className='conatiner mx-auto px-10 py-10'>
      <div className="shadow-2xl rounded-lg p-10 bg-white">
        <h1 className="font-semibold text-xl text-gray-600 sm:text-2xl">Predial</h1>
        <p className="text-lg text-gray-600 sm:text-2xl text-left mt-10">Ingrese clave catastral</p>

        <form className='flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 mt-5'>
          <input type="text" className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder='Clave catastral'
          onChange={handleinputClave}/>
          <button className="w-full rounded-md border border-red-500 bg-red-500 py-2 px-6 text-white transition hover:border-red-600 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-pink-500 disabled:hover:bg-pink-500 sm:max-w-max" type='submit'
          onClick={handleshowForm}>
            Buscar
          </button>
        </form>

        {
          showform
          ? 


          <div className=''>
                      <h1 className='font-semibold text-lg m-5'>IMPORTE TOTAL:</h1>
                      <h5 className='font-semibold text-lg m-5'>$0.00</h5>
            <div className='grid grid-cols-2 gap-4'>
              <div className='shadow-2xl rounded-lg p-10 mt-10'>
                <h1 className='font-semibold text-lg m-5'>Contribuyente</h1>
                <div className="text-left">
                  <p className='text-base text-gray-700'>JIM Y VEN S.A DE C.V.</p>
                  <p className='text-base text-gray-700'>
                    DEPTO: 502 y CAJON DE ESTAC. 502, TERRAZA Y/0 PATIO DE SERV. 
                    Y ROOF GARDEN, COND. COSTA CARBALLO, No. EXT: ACAPULCO DE JUAREZ
                  </p>
                </div>
              </div>
              <div className='shadow-2xl rounded-lg p-10 mt-10'>
                <h1 className='font-semibold text-lg m-5'>Datos Padron</h1>
                <div className="text-left">
                  <p className='text-base text-gray-700'>Cuenta catastral: XXXXXXXXXXXXXXX</p>
                  <p className='text-base text-gray-700'>
                    SUP. TERRENO; 192.86M2, TIPO PREDIO; URBANO CONSTRUIDO 
                    CALLE DEPTO: 502 y CAJON DE ESTAC. 502, TERRAZA Y/0 PATIO DE SERV. 
                    Y ROOF GARDEN, COND. COSTA CARBALLO, No. EXT: ACAPULCO DE JUAREZ
                  </p>
                </div>
              </div>
            </div>


            

            <div className="grid grid-col-1">
              <div className='shadow-2xl rounded-lg p-10 mt-10'>
                <h1 className='font-semibold text-lg m-10'>Periodos de Pago</h1>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className='min-w-full leading-normal'>
                      <thead>
                        <tr>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Periodo
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Concepto
                          </th>
                          <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        { periodos.map(item => (
                          <tr>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{item.periodo}</td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{item.concepto}</td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>{`$ ${item.total}`}</td>
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
                </div>
              </div>

              <div className='mt-10'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className="">
                    <button className='rounded bg-red-500 hover:bg-red-700 text-white py-2 px-10' onClick={handleshowPagoLinea}>
                      Pagar en Linea
                    </button>
                  </div>
                  <div className="">
                    <button onClick={() => setToggle(!toggle)} className="rounded bg-red-500 hover:bg-red-700 text-white py-2 px-10">
                      Orden Desglozada
                    </button>
                    
{toggle &&(
  
<ul class="list-group">
<h5 className='font-semibold text-lg m-5'>Al corriente de pago</h5>
<h1 className='font-semibold text-lg m-5'>Pago de predial: $9,000.00</h1>

<li class="list-group-itemp">PRO EDUCACIÓN: $3,000.00</li>
<li class="list-group-itemp">PRO TURISMO:   $3,000.00</li>
<li class="list-group-itemp">PRO AGUA:      $3,000.00</li>
</ul>
)}

                  </div>
                </div>
              </div>
            </div>
           </div>
           :
          <div className=''>
          </div>
        }


        {
          pagoLinea 
          ? 
          <div className='shadow-2xl rounded-lg p-10 mt-10'>
            <div className=''>
              <form className=''>

                <div className='grid gap-6 mb-6 lg:grid-cols-2 mx-10'>
                  <div>
                    <label for="folio" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Folio</label>
                    <input type="text" id="folio" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Folio" required />
                  </div>
                  <div>
                    <label for="referecia" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Referecia</label>
                    <input type="text" id="referencia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Referencia" required />
                  </div>

                  <div>
                    <label for="concepto" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Concepto de Pago</label>
                    <input type="text" id="concepto" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Cencepto de Pago" required />
                  </div>

                  <div>
                    <label for="importe" class=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Importe</label>
                    <input type="text" id="importe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Importe" required />
                  </div>

                  <div>
                    <label for="email" class=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Email" required />
                  </div>

                  <div>
                    <label for="telefono" class=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
                    <input type="text" id="telefono" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Telefono" required />
                  </div>

                  <div>
                    <button type='button' className='rounded bg-green-500 hover:bg-green-700 text-white py-2 px-10'
                    onClick={handleCancelPagoLinea}>
                      Cancelar
                    </button>
                  </div>
                  <div>
                    <button type='button' className='rounded bg-red-500 hover:bg-red-700 text-white py-2 px-10'>
                      Continuar
                    </button>
                  </div>
                </div>
                
              </form>
            </div>
          </div> 
          :
          <div></div>
        }

      </div>
    </div>
  )
}