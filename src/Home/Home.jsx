import React from 'react';
import Banner from '../components/Banner';
import Categories from '../Pages/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()


    return (
        <div className='w-11/12 mx-auto'>
            {/* Banner */}
            <Banner />

            {/* Heading */}
            <h1 className='text-4xl font-semibold text-center my-12'>Explore Cutting-Edge Gadgets</h1>

            {/* daynamic routes */}
            <div className='flex justify-between border-'>
                {/* Category button */}
                <div>
                    <Categories categories={categories} />
                </div>

                {/* card */}
                <div>
                    <Outlet />
                </div>
            </div>
            
        </div>
    );
};

export default Home;