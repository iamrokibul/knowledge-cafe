import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {img, author, author_img, read_time, post_date, title} = props.blog

    const handleAddToBookmark = props.handleAddToBookmark;
    const handleMarkAsRead = props.handleMarkAsRead;

    return (
        <div className='border border-gray-400 mb-7'>
            <img src={img} alt="" />
            <div>
                <div className='m-4'>
                    <div className='flex items-center border-b pb-2'>
                        <div className='grow flex items-center'>
                            <img className='w-[70px] h-[70px] rounded-full mr-3' src={author_img} alt="" />
                            <h4 className='font-bold'>{author} <span className='block font-normal'>{post_date}</span></h4>
                        </div>
                        <p>{read_time} min read <button onClick={() => handleAddToBookmark(props.blog)}>
                        <FontAwesomeIcon icon={faBookmark} />
                        </button></p>
                    </div>
                    <h2 className='text-3xl my-4 font-bold'>{title}</h2>
                    <button onClick={() => handleMarkAsRead(props.blog)} className='underline'>Mark as read</button>
                </div>

            </div>
        </div>
    );
};

export default Blog;