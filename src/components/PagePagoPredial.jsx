import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { IconButton, Tooltip } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from 'react-router-dom';  // Import react-route-dom
 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Complete la informacion', 'Periodos de pago'];
}

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
  //stepper
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const navigate = useNavigate();


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //end stepper

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

  const handleRegresar = () => {
    return navigate(-1)
  }

  return (
    <div className='conatiner mx-auto px-10 py-10'>
      <div className="shadow-2xl rounded-lg p-10 bg-white">
        <Grid xs={1} justifyContent={'center'}>
          <Tooltip title="Regresar">
            <IconButton aria-label="regresar" onClick={handleRegresar}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip> 
        </Grid>
        <h1 className="font-semibold text-xl text-gray-600 sm:text-2xl">Predial</h1>
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
                <h1 className='font-semibold text-lg m-10'>Peridos de Pago</h1>
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
                    <button className='rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-10' onClick={handleshowPagoLinea}>
                      Pagar en Linea
                    </button>
                  </div>
                  <div className="">
                    <button className="rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-10">
                      Orden Desglozada
                    </button>
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
            
            <div className={classes.root}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                      
                    </Step>
                  );
                })}
              </Stepper>
            <div>
            {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>Reset</Button>
                </div>
              ) : (
              <div>
                {/*<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>*/}
                {
                  activeStep === 0
                  ?
                  <div>
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
                            <button type='button' className='rounded bg-red-500 hover:bg-red-700 text-white py-2 px-10'
                            onClick={handleCancelPagoLinea}>
                              Cancelar
                            </button>
                          </div>
                          <div>
                            <button type='button' className='rounded bg-blue-500 hover:bg-blue-700 text-white py-2 px-10'>
                              Guardar Informacion
                            </button>
                          </div>
                        </div>
                        
                      </form>
                    </div>
                  </div>
                  :
                  <div>
                    <div>

                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          
                          <Typography variant="h4" gutterBottom>
                            Seleccione una de las opciones para realizar el pago:
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color ="primary" variant ='outlined' target={'_blank'} href='https://buy.stripe.com/test_cN29Dc1E80gO9WwcMN'>Pago impuesto predial de 1 año</Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color ="secondary" variant ='contained' target={'_blank'} href='https://buy.stripe.com/test_5kA7v41E8fbI2u4bII'>Pago impuesto predial de 2 años </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color ="primary" variant ='outlined' target={'_blank'} href='https://buy.stripe.com/test_cN29Dc1E80gO9WwcMN'>Pago impuesto predial de 1 año</Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color ="secondary" variant ='outlined' target={'_blank'} href='https://buy.stripe.com/test_3cs5mWciMaVs9Ww002'>Pago impuesto predial de 3 años</Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color ="primary" variant ='contained' target={'_blank'} href='https://buy.stripe.com/test_fZe02CdmQ3t0d8I147'>Pago impuesto predial de 4 años</Button>                    
                        </Grid>
                        <Grid item xs={12}>
                          <Button color ="secondary" variant ='outlined' target={'_blank'} href='https://buy.stripe.com/test_3cs5mWciMaVs9Ww002'>Pago impuesto predial de 5 años</Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button color ="default" variant ='contained' target={'_blank'} href='https://buy.stripe.com/test_3cseXw0A42oWd8IcMR'>Pago impuesto predial de 6 años c/factura</Button>
                        </Grid>
                      </Grid>

                    </div>
                  </div>
                }
                <div className='' style={{marginTop: 30}}>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Regresar
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'FInalizar' : 'Siguiente'}
                  </Button>
                </div>
              </div>
            )}
      </div>
    </div>
          </div> 
          
          :
          <div></div>
        }

      </div>
    </div>
  )
}
