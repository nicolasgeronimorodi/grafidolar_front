import {Container, Row, Col, Image} from 'react-bootstrap/';

function HomeText() {
  return (
   <Container>
    <Row className="px-4 my-5">
      <Col sm={7}>
{/* 
        <Image
        src="https://picsum.photos/900/400"
        fluid
        rounded
        className=""
        />
*/ }
        <h5> Placeholder blablablablablablabla</h5>


      </Col>
      <Col sm={5}>
        <h1>¿Qué ofrece Grafidolar?</h1>
        <p>Cotizaciones del dólar actualizadas periódicamente. 
          Gráficos para observar la evolución del valor en los últimos días.</p>
      </Col>
      </Row>
      <br></br>
        <blockquote className="blockquote mb-0">
          <p>
            
  
          </p>
          <br></br>
          
        </blockquote>
     
      </Container>
  );
}

export default HomeText;