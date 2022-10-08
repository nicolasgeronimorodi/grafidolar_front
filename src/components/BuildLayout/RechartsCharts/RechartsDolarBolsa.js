

import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

import {useState, useEffect} from "react";
import axios from "axios";
import moment from 'moment';
import 'moment-timezone'
import { TailSpin } from 'react-loader-spinner';
const RechartsDolarBolsa=()=>{
    var days=86400000 
    function formatDateZone(date)
    //formatea zona horaria y devuelve string legible
    {
      return moment(date).tz("America/Argentina/Buenos_Aires").format("DD-MM-YYYY HH:mm")
    } 
    
    function formatBackToDate(string){
    //toma string de fecha con formato legible y devuelve un tipo Date
        return moment(string,'DD-MM-YYYY HH:mm').toDate()
        
    }
    
    function datestringToNumberFormatted(datestring){
    //recibe un string de fecha y devuelve numero de milisegundos para comparar
        var date=new Date(datestring)
        var miliseconds=date.getTime()
        return miliseconds
    }
    
    //const [oficial, setOficial]=useState([]); 
    const [valoresDecimated, setValoresDecimated]=useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    
    
    function compareDates(fecha){
        
    // compara la fecha en isostring provista en el array de objetos con la dif. entre la fecha de hoy y la fecha de hace X cantidad de días
    
    var today=new Date()
        var DaysAgo= new Date(today - (7*days) )
        var formattedTimeZone=formatDateZone(fecha)
        
        //console.log(formattedTimeZone + " formattedTimeZone")
        var date=formatBackToDate(formattedTimeZone) ///tira 1969 ???
        
        /*
        console.log(date + " Date por parametro ")
        console.log(date.getTime() + " date.getTime()")
        console.log(DaysAgo.getTime() + "  days ago get Time() ")
        console.log(new Date(DaysAgo)+ " Date de DaysAgo")
        console.log ((date.getTime() > DaysAgo.getTime() ))
        */
        return date.getTime() > (DaysAgo.getTime())
        
    }
    const dataDecimatedByDate=(valoresDecimated.map( function (e) { 
    
    //console.log({x:datestringToNumberFormatted(e.updatedAt), y:parseFloat(e.venta) })   
    return {x: datestringToNumberFormatted(e.updatedAt), precio: parseFloat(e.venta)}
    })
    )

    useEffect( ()=>
    {
        async function fetchAPI(){
            const controller=new AbortController();
            const response=await axios.get("https://grafidolar-restapi.herokuapp.com/cotizaciones", {signal: controller.signal
            });
            const jsondata=response.data;
            const dolarbolsa=jsondata.filter( e=> e.nombre=="Dolar Bolsa" )
           
            
            const valoresDecimatedByDate=dolarbolsa.filter(e=> compareDates(e.updatedAt));
            setValoresDecimated(valoresDecimatedByDate)
            //console.log("cambio de estado compdolarbolsa")
        };
    fetchAPI();
    setIsLoading(false);
    
    return ()=>{
    controller.abort()
    };
    
     }, [])

     return (
        <>
        {
         isLoading ? (
                    
<TailSpin
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
         ):(
            <ResponsiveContainer width="100%" height="100%">
      
          
    <AreaChart data={dataDecimatedByDate} margin={{
    top: 10, right: 10, bottom: 10, left: -22,
  }}>
    <defs>
    <linearGradient id="colorBolsa" x1="0" y1="0" x2="0" y2="1">
    <stop offset="10%" stopColor="#470619" stopOpacity={0.8}/>
    <stop offset="90%" stopColor="#800f31" stopOpacity={0.4}/>
    </linearGradient>
    </defs>
    <Area type="monotone" dataKey="precio" stroke="#800f31" fillOpacity={1} fill="url(#colorBolsa)" strokeWidth={2} dot={false}/>
    <CartesianGrid stroke="#ebe8e8" />

    <XAxis  dataKey="x" scale="time" type="number" tickFormatter={formatDateZone} domain={["dataMin", "dataMax"]}  />
    <YAxis domain={[200, 400]} />
    <Tooltip labelFormatter={formatDateZone} cursor={true} offset={50} allowEscapeViewBox={{ y: true }}/>
</AreaChart>  
        
          </ResponsiveContainer>
          )
        }
          
    
        </>
        )

}
export default RechartsDolarBolsa