import {Container, Row, Col, Card} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import React from 'react';
export default function About(){

return (

<Container>
<Card>
<Card.Img />
<Card.Body>
<Card.Title>
<h1 className='textHeader'>¿Qué es Grafidolar?</h1>
</Card.Title>
<Card.Text>
    
Esencialmente, Grafidolar es un proyecto de aprendizaje de desarrollo web. Lo que hace es muy sencillo. Recoge cuatro cotizaciones del dólar día a día y procesa los datos de modo que puede mostrar gráficamente su evolución en los últimos 5 días. Utiliza Express, las librerías React y Recharts, entre otras. Para contactarme, me podés seguir en <a
          class='social-icon-link github'
          href="https://linkedin.com/in/nicolasrodi"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        > LinkedIn </a> o ver mi perfil de  <a
        class='social-icon-link github'
        href="https://github.com/nicolasgeronimorodi"
        target='_blank'
        rel="noopener"
        aria-label='Github'
      > GitHub
      </a>.

</Card.Text>
</Card.Body>

</Card>
</Container>
    )
}