import React from 'react';
import './ChefCard.css'
import { FaRegHeart, FaUserClock} from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const ChefCard = ({chef}) => {
    const{img, name, numOfLikes ,numOfRecipes, yearsOfExperience,id}=chef
    return (
        <div className="rounded-lg shadow-md border border-gray-300">
            <LazyLoad  height={240}  width='100%' threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <img className="h-64 w-full object-cover rounded-t-md " src={img}alt="Chef Picture" />
            </LazyLoad>
            <div className=" p-4 card-body rounded-b-md">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <div className="flex items-center justify-between mt-2 text-gray-600">
                    <p className='flex items-center gap-3 hover:text-red-500'>
                         <FaUserClock  className='text-2xl'/>
                        <span>{yearsOfExperience} Years of experience</span>
                    </p>

                    <p className='flex items-center gap-3 hover:text-red-500'>
                        <MdRestaurantMenu/>  <span> {numOfRecipes} recipes</span>
                    </p>

                    <p className='flex items-center gap-3 hover:text-red-500'>
                    <FaRegHeart></FaRegHeart>
                    <span >{numOfLikes} Likes</span>
                    </p>
                    

                </div>
                <div className="mt-4">
                    <Link to={`/recipes/${id}`} className="px-4 py-2 font-semibold text-white bg-red-400 rounded-md hover:bg-red-500">
                        View Recipes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;