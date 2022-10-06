
/*
const LineChart = lazy(() => import('recharts').then(module => ({ default: module.LineChart })));
//const ResponsiveContainer = lazy(() => import('recharts').then(module => ({ default: module.ResponsiveContainer })));
const Line = lazy(() => import('recharts').then(module => ({ default: module.Line })));
const XAxis = lazy(() => import('recharts').then(module => ({ default: module.XAxis })));
const YAxis = lazy(() => import('recharts').then(module => ({ default: module.YAxis })));
const CartesianGrid = lazy(() => import('recharts').then(module => ({ default: module.CartesianGrid })));
const Tooltip = lazy(() => import('recharts').then(module => ({ default: module.Tooltip })));
//const ReferenceLine = lazy(() => import('recharts').then(module => ({ default: module.ReferenceLine })));
*/






import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,} from 'recharts';
import {useState, useEffect} from "react";
import axios from "axios";
import moment from 'moment';
import 'moment-timezone'
import { TailSpin } from 'react-loader-spinner';
const RechartsDolarOficial=()=>{

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
    const [oficialDecimated, setOficialDecimated]=useState([]);
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
    const dataDecimatedByDate=(oficialDecimated.map( function (e) { 
    
    //Wconsole.log({x:datestringToNumberFormatted(e.updatedAt), y:parseFloat(e.venta) })   
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
        const dolaroficial=jsondata.filter( e=> e.nombre=="Dolar Oficial" )
        
        const oficialDecimatedByDate=dolaroficial.filter(e=> compareDates(e.updatedAt));
        setOficialDecimated(oficialDecimatedByDate)
        console.log("cambio de estado compdolaroficial")
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
        <ResponsiveContainer width="95%" height="80%">
        <LineChart  data={dataDecimatedByDate}>
        <Line type="monotone" dataKey="precio" stroke="#8884d8" strokeWidth={3} dot={false} />
        <CartesianGrid stroke="#ccc" />
       
        <XAxis  dataKey="x" scale="time" type="number" tickFormatter={formatDateZone} domain={["dataMin", "dataMax"]}  />
        <YAxis domain={[100, 500]} />
        <Tooltip labelFormatter={formatDateZone}/>
      </LineChart>
      </ResponsiveContainer>
      )
    }
      

    </>
    )


}
export default RechartsDolarOficial
