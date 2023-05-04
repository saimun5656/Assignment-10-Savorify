import React from 'react';

const CategoryCard = ({category}) => {
    const{name,img}=category
    console.log(img);
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default CategoryCard;