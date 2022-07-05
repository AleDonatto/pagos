import React from 'react'
import { Link } from "react-router-dom";


export const HomePagos = () => {
  return (
    <div>
        <div className="container mx-auto px-4">
            <div className="justify-center">
                <div className="shadow-2xl rounded-lg">
                    <div className="divide-y divide-dashed">
                        <div className='flex justify-center mt-10 mb-5 py-5'>
                            <img src="https://pagosmunicipioacapulco.mx/assets/img/municipio.png" alt="" className='max-h-40'/>
                        </div>
                        <div className="my-10 py-10">
                            <h1 className='font-bold text-3xl text-gray-900'>Pagos en linea</h1>
                            <p class=" font-base text-base text-gray-600 mt-5">Desde ahora puedes realizar tus pagos completamente en linea.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="m-5 bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                            <div className="w-full flex justify-center mb-2">
                                <svg class="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </div>
                            <Link className='rounded-full bg-blue-500 hover:bg-blue-800 px-10 py-2 text-white' to="/pago-predial">Pago Predial</Link>
                        </div>
                        <div className="m-5 bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                            <div className="w-full flex justify-center">
                                <svg class="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                            </div>
                            <button type='button' className='rounded-full bg-blue-500 hover:bg-blue-800 px-10 py-2 text-white'>Tramites Catrastales</button>
                        </div>
                        <div className="m-5 bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                            <div className="w-full flex justify-center">
                                <svg class="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <button type='button' className='rounded-full bg-blue-500 hover:bg-blue-800 px-10 py-2 text-white'>Certificado Catrastal</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
