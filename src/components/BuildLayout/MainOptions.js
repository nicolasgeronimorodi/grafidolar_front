import { React, lazy, Suspense } from 'react';
import {Tab, Tabs, Container, Col, Row} from 'react-bootstrap';

const TabbedCharts=lazy(()=> import('./TabbedCharts'))
const CotizacionesTable = lazy( ()=> import('./CotizacionesTable'))



export default function MainOptions(){

return (

<Container fluid>


<Tabs justify variant='pills'>


<Tab
tabClassName='optionsTab'
eventKey={1}
title="tabla"

>

<Suspense fallback={<div></div>}><CotizacionesTable /></Suspense>
</Tab>

<Tab
tabClassName='optionsTab'
eventKey={2}
title="gráficos"
>

<Suspense fallback={<div>Cargando...</div>}>
<TabbedCharts />
</Suspense>
</Tab>

</Tabs>


</Container>


)
}