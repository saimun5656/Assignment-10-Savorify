import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import ChefCard from './ChefCard/ChefCard';
import CategoryCard from './ChefCard/CategoryCard/CategoryCard';
const Home = () => {
    const [chefs,setChefs]=useState([]);
    const [categories,setCategories]=useState([]);
    const [dataLoader,setDataLoader]=useState(true);
    useEffect(()=>{
         fetch('https://assignmet-10-chef-recipe-hunter-server-side-saimun5656.vercel.app/chefs')
        //fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(err=>console.log(err))
        setDataLoader(false)
    },[])
    useEffect(()=>{
        fetch('https://assignmet-10-chef-recipe-hunter-server-side-saimun5656.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(err=>console.log(err))
        setDataLoader(false)
    },[])
    console.log(categories);
    return (
        <div className='home '>
            <Banner></Banner>
           <div className='md:w-11/12 mx-auto  '>
           <h2 className='mb-5 font-semibold text-2xl'>our Chefs</h2>

           {
             dataLoader?<progress className="progress w-56 bg-red-400"></progress>
             :<></>
           }

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {
                chefs.map(cf=><ChefCard chef={cf}></ChefCard>)      
                } 
            </div>
            <h1 className='mt-5 font-semibold text-2xl'>Categores</h1>
           <div className='categories-sec grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 w-11/12 mx-auto'>

               {
                categories.map(ct=><CategoryCard key={ct.id} category={ct}></CategoryCard>)
               }
           </div>

           </div>
        </div>
    );
};

export default Home;