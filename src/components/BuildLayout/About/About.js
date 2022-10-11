import {Container, Card} from 'react-bootstrap/';

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
<p >
Esencialmente, Grafidolar es un proyecto de aprendizaje de desarrollo web full-stack. Recoge cuatro cotizaciones del dólar día a día, almacena y procesa los datos de modo que muestra gráficamente su evolución en los últimos 7 días. 
</p>
<p> Utiliza Express, las librerías React y Recharts, entre otras. La idea a futuro es escalar el sitio con nuevas características. Para contactarme, me podés seguir en <a
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
      </p>
</Card.Text>
</Card.Body>

</Card>
</Container>
    )
}