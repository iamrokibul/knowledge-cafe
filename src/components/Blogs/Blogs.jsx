import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import Readtime from '../Readtime/Readtime';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);
    const [readTime, setReadTime] = useState([]);

    useEffect(() => {
        fetch('blogdata.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const handleAddToBookmark = (blog) => {
        const storedBookmarked = [...bookmarked, blog];
        setBookmarked(storedBookmarked);
    }
    const handleMarkAsRead = (blogs) => {
        const storedReadTime = [...readTime, blogs];
        setReadTime(storedReadTime);
    }

    return (
        <div className='grid grid-cols-6 p-5 w-[70%] m-auto'>
            <div className='col-span-4 col-start-1'>
                <h2 className='text-3xl font-bold mb-7 pl-5'>Knowledge Cafe</h2>
                <div className='px-5'>
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog = {blog}
                            handleAddToBookmark = {handleAddToBookmark}
                            handleMarkAsRead = {handleMarkAsRead}
                        ></Blog>)
                    }
                </div>
            </div>
            <div className='p-5 col-span-2 bg-slate-200'>

                <div className='sticky top-3'>
                    <Readtime readTime={readTime}></Readtime>

                    <div className='bg-gray-300 p-4 rounded-md'>
                        <h2 className='font-bold text-xl'>Bookmared Blogs: {bookmarked.length}</h2>
                        {
                            bookmarked.map(bookmarked => <Sidebar 
                                key={bookmarked.id}
                                bookmarked = {bookmarked}
                                ></Sidebar>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;