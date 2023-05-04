import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegHeart, FaUserClock } from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
const Recipes = () => {

    const chef = useLoaderData();

    const { bio, img, name, numOfLikes, numOfRecipes, yearsOfExperience, id } = chef
    const recipes = (chef.recipes);

    console.log(recipes);
    return (
        <div>
            <div className="md:grid grid-cols-5 w-11/12   mx-auto rounded-lg shadow-md border border-gray-300">
                <img className=" w-full h-full col-span-3 object-cover rounded-t-md md:rounded-l md:rounded-r-none" src={img} alt="Chef Picture" />
                <div className="col-span-2 p-4 card-body rounded-b-md flex ">
                    <div className='grow'>
                        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                        <h2>{bio}</h2>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-gray-700">
                        <p className='flex items-center gap-3 hover:text-red-500'>
                            <FaUserClock className='text-2xl' />
                            <span>{yearsOfExperience} Years of experience</span>
                        </p>

                        <p className='flex items-center gap-3 hover:text-red-500'>
                            <MdRestaurantMenu />  <span> {numOfRecipes} recipes</span>
                        </p>

                        <p className='flex items-center gap-3 hover:text-red-500'>
                            <FaRegHeart></FaRegHeart>
                            <span >{numOfLikes} Likes</span>
                        </p>


                    </div>
                    <div className="mt-4">

                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    recipes.map((rc, idx) => <RecipeCard key={idx} recipe={rc}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Recipes;