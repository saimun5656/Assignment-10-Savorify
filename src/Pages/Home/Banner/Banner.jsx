import React from 'react';

const Banner = () => {
    return (
        <div className=' md:h-screen mb-5'>
            <div className="relative bg-gray-800 md:h-5/6 h-80">
                <div className="absolute inset-0 ">
                    <img className='w-full h-full rounded' src="https://img.freepik.com/free-photo/thanksgiving-day-meal-with-copy-space_23-2149100124.jpg?w=2000&t=st=1683095579~exp=1683096179~hmac=c3d9573a8f07093814c223722ff041a6b38ed5676dae81c8f7474b0fc201e670" alt="" />
                </div>
                <div className="relative h-full  opacity-75 bg-black">
                    <div className="carousel w-full h-full flex items-center">
                        <div id="slide1" className="carousel-item relative w-full">
                          <div className='text-white w-10/12 mx-auto text-center'>
                          <h1 >Slide-1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae quia in cupiditate nemo? Itaque cumque illum pariatur odio </h1>
                           <input className='bg-white rounded-l p-4 mt-4' type="text" name="" id="" placeholder='Search Recipe'/>
                           <button className='bg-red-400 p-4 rounded-r'>Search</button>
                          </div>   

                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="text-white">❮❮</a>
                                <a href="#slide2" className="text-white">❯❯</a>
                        </div>
                        </div>

                        <div id="slide2" className="carousel-item relative w-full">
                        <div className='text-white w-10/12 mx-auto text-center'>
                          <h1 >Slide-2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae quia in cupiditate nemo? Itaque cumque illum pariatur odio magnam earum provident vel inventore doloremque cum, incidunt at, et dolores!</h1>
                           <input className='bg-white text-gray-900 rounded-l p-4 mt-4' type="text" name="" id="" placeholder='Search Recipe'/>
                           <button className='bg-red-400 p-4 rounded-r'>Search</button>
                          </div>   
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="text-white">❮❮</a>
                                <a href="#slide3" className="text-white">❯❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                           <h1 className='text-white w-10/12 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae quia in cupiditate nemo? Itaque cumque illum pariatur odio magnam earum provident vel inventore doloremque cum, incidunt at, et dolores!</h1>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="text-white">❮❮</a>
                                <a href="#slide4" className="text-white">❯❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                           <h1 className='text-white w-10/12 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae quia in cupiditate nemo? Itaque cumque illum pariatur odio magnam earum provident vel inventore doloremque cum, incidunt at, et dolores!</h1>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="text-white">❮❮</a>
                                <a href="#slide5" className="text-white">❯❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                           <h1 className='text-white w-10/12 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae quia in cupiditate nemo? Itaque cumque illum pariatur odio magnam earum provident vel inventore doloremque cum, incidunt at, et dolores!</h1>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="text-white">❮❮</a>
                                <a href="#slide1" className="text-white">❯❯</a>
                            </div>
                        </div>
                        
                       
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Banner;