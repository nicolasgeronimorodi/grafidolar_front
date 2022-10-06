import { lazy, Suspense } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap/';
//import MainTextImage from '../../assets/assets_components/MainTextImage.JS';
const MainTextImage = lazy( ()=>import('../MainTextImage.js') )


//import Grafidolar_CityPorteña from '../../assets/Grafidolar_CityPorteña.png'
function HomeText() {
  return (
   <Container>
    <Row className="px-4 my-5">
      <Col sm={7}>
{
        <Suspense fallback={
          <div>Cargando...</div>
        }>
       <MainTextImage />
       </Suspense>
 }
      </Col>
      
      <Col sm={5}>
        <h1>¿Qué ofrece Grafidolar?</h1>
        <p>Cotizaciones del dólar actualizadas periódicamente. 
          Gráficos para observar la evolución del valor en los últimos días.</p>
      </Col>
      </Row>
      
     
      </Container>
  );
}

export default HomeText;