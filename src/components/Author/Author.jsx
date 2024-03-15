import React from 'react';

const Author = () => {
    return (
        <div className='pb-10'>
            <h1 className='text-3xl text-indigo-500 text-center pb-10'>Our Poplular Authors</h1>
            <div className='flex flex-col sm:flex-row gap-20  items-center justify-center'>
                <div>
                    <img src="https://i.ibb.co/wNkxR0H/avataaars-2.png" alt="" className='w-28 h-28 rounded-full' />
                    <h1 className='text-xl'>Malik Johnson</h1>
                    <h3 className='text-gray-400 font-bold'>Category: Travel</h3>
                </div>
                <div>
                    <img src="https://i.ibb.co/KjChLth/avataaars-3.png" alt="" className='w-28 h-28 rounded-full' />
                    <h1 className='text-xl'>Elena Rodriguez</h1>
                    <h3 className='text-gray-400 font-bold'>Category: Food</h3>
                </div>
                <div>
                    <img src="https://i.ibb.co/h29FWtc/avataaars.png" alt="" className='w-28 h-28 rounded-full' />
                    <h1 className='text-xl'>Lara Patel</h1>
                    <h3 className='text-gray-400 font-bold'>Category: Gaming</h3>
                </div>
            </div>
        </div>
    );
};

export default Author;