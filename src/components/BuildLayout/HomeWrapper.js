
import { React, lazy, Suspense } from 'react';



const HomeText=lazy(()=> import('./HomeText'))
const MainOptions=lazy( ()=> import('./MainOptions'))

export default function HomeWrapper(){

return (
<>


<main >
<div>

<Suspense fallback={<div></div>}><HomeText /></Suspense>
<hr class="solid"></hr>
<Suspense fallback={<div></div>}> <MainOptions /></Suspense>
</div>
</main>
</>
);

}