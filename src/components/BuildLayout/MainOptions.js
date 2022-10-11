import { React, lazy, Suspense, useEffect } from 'react';
import {Tab, Tabs, Container} from 'react-bootstrap';



const TabbedCharts=lazy(()=> import('./TabbedCharts'))
const CotizacionesTable = lazy( ()=> import('./CotizacionesTable'))







export default function MainOptions(){

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

<Container fluid>


<Tabs justify variant='pills'>


<Tab
tabClassName='optionsTab'
eventKey={1}
title="tabla"
onClick={HandleClick}
>

<Suspense fallback={<div></div>}><CotizacionesTable /></Suspense>
</Tab>

<Tab
tabClassName='optionsTab'
eventKey={2}
title="gráficos"
onClick={HandleClick}
>

<Suspense fallback={<div>Cargando...</div>}>
<TabbedCharts />
</Suspense>
</Tab>

</Tabs>


</Container>


)
}