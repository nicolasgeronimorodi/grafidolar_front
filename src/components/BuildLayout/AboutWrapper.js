
import { React, lazy, Suspense } from 'react';



const About=lazy(()=>import('./About/About'))




export default function AboutWrapper(){

    return (
    <>
    
    <Suspense fallback={<div></div>}><HeaderNavbar /></Suspense>
    <main >
    <div>
   <Suspense fallback={<div></div>}><About /></Suspense>
    </div>
    </main>
     </>
    );
    
    }
