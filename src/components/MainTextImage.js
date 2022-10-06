import react from 'react'
import { Image } from 'react-bootstrap'
import Grafidolar_CityPorteña from '../assets/Grafidolar_CityPorteña.png'

export default function MainTextImage(){

return (


/*
 <Image
        src="https://grafidolar-restapi.herokuapp.com/static/images/Grafidolar_CityPorteña.png"
        fluid
        rounded
        className=""
        />

*/
<Image
src={Grafidolar_CityPorteña}
rounded
fluid
width={555}
height={326}
/>

)
}
