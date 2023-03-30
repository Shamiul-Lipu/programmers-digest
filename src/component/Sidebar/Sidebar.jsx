import React from 'react';


const Sidebar = ({ readingTime, bookmarked, blogTitl }) => {

    console.log(blogTitl);
    // bookmarked.filter(e => e % 2 !== 0).map((e, i) => <h3 key={i}>{e}</h3>)
    const e = bookmarked.filter(e => e % 2 !== 0)
    // console.log(e);
    return (
        <div className='sticky top-0'>
            <div className=''>
                <h5 className='border-2 border-indigo-600 rounded-md bg-indigo-100 text-indigo-600 text-lg font-semibold p-5'>Spent time on read: {readingTime} min</h5>
            </div>
            <div>
                <h3 className='border-2 rounded-md  text-lg font-semibold p-5'>Bookmarked Blogs: 0</h3>
                {

                }
            </div>
        </div>
    );
};

export default Sidebar;