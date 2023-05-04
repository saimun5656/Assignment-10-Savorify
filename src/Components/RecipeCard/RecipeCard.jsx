import React, { useState } from 'react';
import { FaCaretRight, FaClipboardList } from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Rating } from '@smastrom/react-rating'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'
const RecipeCard = ({ recipe, }) => {
    const [isdisable, setDisable] = useState(false)
    const notify = () => {
        setDisable(true)
        toast.success('the recipe is your favorite', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    const { cookingMethod, recipeName, recipeImg, ingredients, rating } = recipe
    console.log(recipe);


    return (
        <div className="rounded-lg shadow-md border border-gray-300 relative pb-2">

            <img className="h-64 w-full object-cover rounded-t-md " src={recipeImg} alt="Chef Picture" />
            <div className=" p-4 card-body rounded-b-md">

                <h2 className="text-xl font-semibold text-gray-800">{recipeName}</h2>
                <h1><FaClipboardList className='inline text-xl' /><b> Ingredients</b></h1>
                <div className='grid grid-cols-2'>

                    {
                        ingredients.map((ind, idx) => <span key={idx}> <FaCaretRight className='inline ' /> {ind}</span>)
                    }
                </div>
                <div>
                    <h1 className='md:h-52 lg:h-96 xl:h-52'><b>Cooking Method : </b>{cookingMethod}</h1>


                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Rating className='inline' style={{ maxWidth: 100 }} value={rating} readOnly />
                            <span>{rating}</span>
                        </div>
                        <div>
                            <button disabled={isdisable} onClick={notify} className='disabled:opacity-50 bg-red-400 py-3 px-5 rounded-md text-white'>+ Favourite</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default RecipeCard;