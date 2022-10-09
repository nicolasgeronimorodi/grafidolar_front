import React, { useState, useEffect } from "react";

import axios from 'axios';
import {Table, Container }from 'react-bootstrap/'


export default function CotizacionesTable(){
const [cotizaciones, setCotizaciones] = useState([]);


useEffect ( () => { 
  const fetchData=async()=>{
    const controller=new AbortController();
    try{
      const {data: response} = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales",   {signal: controller.signal});
      //console.log(response+ " response del get")
      const skimmedResponse=response.filter( e=> e.casa.nombre!=='Dolar Soja' && e.casa.nombre!=='Bitcoin' && e.casa.nombre!=='Dolar turista' && e.casa.nombre!=='Dolar' && e.casa.nombre!=='Argentina')
      setCotizaciones(skimmedResponse);
     //console.log("cotizacion updateado "+ new Date().toUTCString())
      }catch(error){
          console.error(error.message);
      }
  
  
  
  }
    
  fetchData();
  return () =>{
    controller.abort();
  }
      }, []);
        
        
return (
    <>
    <Container fluid>
    <br></br>
      <div className="headerDiv">
        <h2>Obtené las cotizaciones actualizadas</h2>
      </div>
      <br></br>
    <Table striped bordered hover size="sm">
    
            
            <thead className="tableHeader">
              <tr>
                <th>Tipo</th>
                <th>Precio compra</th>
                <th>Precio venta</th>
              </tr>
            </thead>
            <tbody>
              {cotizaciones.map((cotizacion) => (
                <tr>
                  <td>{cotizacion.casa.nombre}</td>
                  <td>{cotizacion.casa.compra}</td>
                  <td>{cotizacion.casa.venta}</td>
                </tr>
              ))}
            </tbody>
         
    </Table>
    </Container>
<span>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
</span>

    </>
);
}

