import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center h-16 w-full bg-black'>
            <div className='text-2xl uppercase font-bold text-white pl-10'>Logo</div>
            <div>
                <ul className='flex justify-end pr-10'>
                    <li><a className='text-white ml-5 text-xl uppercase' href="/">Home</a></li>
                    <li><a className='text-white ml-5 text-xl uppercase' href="/blog">Blog</a></li>
                    <li><a className='text-white ml-5 text-xl uppercase' href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;