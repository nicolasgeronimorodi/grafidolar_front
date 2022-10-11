import { React, lazy, Suspense, useEffect } from 'react'


import {Tab, Tabs, Container, Table} from 'react-bootstrap'



const RechartsDolarOficial = lazy(()=>import('./RechartsCharts/RechartsDolarOficial'))
const RechartsDolarBlue = lazy( ()=> import('./RechartsCharts/RechartsDolarBlue'))
const RechartsDolarCCL = lazy( () => import('./RechartsCharts/RechartsDolarCCL'))
const RechartsDolarBolsa = lazy( ()=> import('./RechartsCharts/RechartsDolarBolsa'))




function TabbedCharts() {
  function HandleClick(e){
    e.preventDefault();
    e.stopImmediatePropagation();
 }

 useEffect(()=>  {
  if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
},[]);

return (
 

<>
<Container fluid >
  <br></br>
  <div className='headerDiv'>
    <h3>Seleccioná un tipo de dólar para ver su evolución en los últimos días</h3>
  </div>
  <br></br>
     <Table>
       <tbody>
     
     <Tabs fill
      
       //id="uncontrolled-tab-example"
       className="mb-3"

     >
       <Tab eventKey="Dolar Oficial" title="Dólar Oficial" onClick={HandleClick}>
         

           <div  className='chartContainer' style={{ position: "relative"}} >
             
           <Suspense fallback={<div>Cargando...</div>}><RechartsDolarOficial tipo="Dolar Oficial"/></Suspense>
            
           </div>
           </Tab>
         

      
       <Tab eventKey="Dolar Blue" title="Dólar Blue" onClick={HandleClick}>
        
           <div className='chartContainer' style={{ position: "relative"}} >
          
            <Suspense fallback={<div>Cargando..</div>}> <RechartsDolarBlue /></Suspense>
           
           </div>
        
       </Tab>
       <Tab eventKey="Dolar Contado con Liquidacion" title="Dólar Contado con Liquidación" onClick={HandleClick}>
         
           <div  className='chartContainer' style={{ position: "relative"}} >
           
           
             <Suspense fallback={<div>Cargando...</div>}><RechartsDolarCCL /></Suspense>
            
           </div>
         
       </Tab>

       <Tab eventKey="Dolar Bolsa" title="Dólar Bolsa" onClick={HandleClick} >
        
           <div className='chartContainer' style={{ position: "relative"}} >
           
             <Suspense fallback={<div>Cargando...</div>}><RechartsDolarBolsa /></Suspense>
            
           </div>

       
       </Tab>

       
     </Tabs>
     </tbody>
     </Table>
     </Container>
    

  </>
  );



}
export default TabbedCharts;

 
     
  
     