import { LazyLoadImage } from "react-lazy-load-image-component";
import MainImageBootstrapped from "../assets/assets_components/MainImageBootstrapped";
export default function MainTextImage(){

return(

<div>
<LazyLoadImage
src={MainImageBootstrapped}
/>
</div>
)
}