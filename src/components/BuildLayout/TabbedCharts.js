import { React, lazy, Suspense } from 'react'


import {Tab, Tabs, Container, Table} from 'react-bootstrap'



const RechartsDolarOficial = lazy(()=>import('./RechartsCharts/RechartsDolarOficial'))
const RechartsDolarBlue = lazy( ()=> import('./RechartsCharts/RechartsDolarBlue'))
const RechartsDolarCCL = lazy( () => import('./RechartsCharts/RechartsDolarCCL'))
const RechartsDolarBolsa = lazy( ()=> import('./RechartsCharts/RechartsDolarBolsa'))




function TabbedCharts() {

return (
 

<>
<Container fluid >
  <br></br>
  <div className='headerDiv'>
    <h3>Gráficos</h3>
  </div>
  <br></br>
     <Table>
       <tbody>
     
     <Tabs fill
       defaultActiveKey="Dolar Blue"
       //id="uncontrolled-tab-example"
       className="mb-3"

     >
       <Tab eventKey="Dolar Oficial" title="Dólar Oficial">
         

           <div  className='chartContainer' style={{ position: "relative"}} >
             
           <Suspense fallback={<div></div>}><RechartsDolarOficial tipo="Dolar Oficial"/></Suspense>
            
           </div>
           </Tab>
         

      
       <Tab eventKey="Dolar Blue" title="Dólar Blue">
        
           <div className='chartContainer' style={{ position: "relative"}} >
          
            <Suspense fallback={<div></div>}> <RechartsDolarBlue /></Suspense>
           
           </div>
        
       </Tab>
       <Tab eventKey="Dolar Contado con Liquidacion" title="Dólar Contado con Liquidación">
         
           <div  className='chartContainer' style={{ position: "relative"}} >
           
           
             <Suspense><RechartsDolarCCL /></Suspense>
            
           </div>
         
       </Tab>

       <Tab eventKey="Dolar Bolsa" title="Dólar Bolsa" >
        
           <div className='chartContainer' style={{ position: "relative"}} >
           
             <Suspense><RechartsDolarBolsa /></Suspense>
            
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

 
     
  
     