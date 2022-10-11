
import {Container, Row, Col} from 'react-bootstrap/';

function HomeText() {
  return (
   <Container>
    <Row className="px-4 my-5">
      
      <Col className="align-items-center" sm={10} xs={12}>
       
        <h1>¿Qué ofrece Grafidolar?</h1>
        <p className='homeText'>Cotizaciones del dólar actualizadas periódicamente. </p>
         <p className='homeText'> Gráficos para observar la evolución del valor en los últimos días.</p>
        
      </Col>
     
      </Row>
      
     
      </Container>
  );
}

export default HomeText;