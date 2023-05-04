import React from 'react';
import { FaRegHeart, FaUserClock} from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const TrendingCard = ({recipe}) => {
    const{name,img}=recipe
    return (
        <div className="rounded-lg shadow-md border border-gray-300">
        <img className="h-64 w-full object-cover rounded-t-md " src={img}alt="Chef Picture" />
        <div className=" p-4 card-body rounded-b-md">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <div className="flex items-center justify-between mt-2 text-gray-600">
               

                <p className='flex items-center gap-3 hover:text-red-500'>
                <FaRegHeart></FaRegHeart>
                <span >{} Likes</span>
                </p>
                

            </div>
           
        </div>
    </div>
    );
};

export default TrendingCard;