import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import ChefCard from './ChefCard/ChefCard';
const Home = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
         fetch('https://assignmet-10-chef-recipe-hunter-server-side-saimun5656.vercel.app/chefs')
        //fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(err=>console.log(err))
    },[])
    console.log(chefs);
    return (
        <div className='home '>
            <Banner></Banner>
           <div className='md:w-11/12 mx-auto  '>
           <h2>our Chefs</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                
                 {
                chefs.map(cf=><ChefCard chef={cf}></ChefCard>)
                 }
            </div>
           </div>
        </div>
    );
};

export default Home;