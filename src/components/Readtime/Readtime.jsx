import React from 'react';

const Readtime = ({readTime}) => {
    
    let read_Time = 0;
    for(const blog of readTime){
        read_Time = read_Time + blog.read_time;
        
    }
    return (
        <div className='bg-sky-200 p-4 rounded-md font-bold mb-3'>
            <h2>Spend time on read: {read_Time} min</h2>
        </div>
    );
};

export default Readtime;