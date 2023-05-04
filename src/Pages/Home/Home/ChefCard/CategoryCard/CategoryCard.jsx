import React from 'react';

const CategoryCard = ({category}) => {
    const{name,img}=category
    console.log(img);
    return (
        <div className='relative z-0 rounded shadow-md transition duration-500 ease-in-out transform hover:scale-110'>
            <img className='w-full h-full transition duration-500 ease-in-out transform hover:scale-110 z-40  rounded-md' src={img} alt="" />
            <div className='bg-black absolute w-full h-full top-0 opacity-75 flex items-center justify-center z-0 rounded-md'>
               <h1 className='text-white text-4xl'>{name}</h1>
            </div>
        </div>
    );
};

export default CategoryCard;