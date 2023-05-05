import React from 'react';

const CategoryCard = ({category,select}) => {
    const{name,img, numOfRecipes, id}=category
    // console.log(img);
    return (
        <div onClick={()=>select(id)} className=' rounded shadow-md transition duration-500 ease-in-out transform hover:scale-110'>
            <img className='w-full h-full relative transition duration-500 ease-in-out transform hover:scale-110 z-0  rounded-md' src={img} alt="" />
            <div className='bg-black absolute w-full h-full top-0 opacity-75 flex flex-col items-center justify-center z-40 rounded-md text-white text-2xl'>
               <h1 className=''>{name}</h1>
               <p>{numOfRecipes} recipes</p>
            </div>
        </div>
    );
};

export default CategoryCard;