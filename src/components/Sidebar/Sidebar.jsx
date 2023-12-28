import React from 'react';

const Sidebar = ({bookmarked}) => {
    const {title} = bookmarked;
    return (
        <div className='bg-white my-3 py-2 px-3 rounded-md'>
            <h3>{title}</h3>
        </div>
    );
};

export default Sidebar;