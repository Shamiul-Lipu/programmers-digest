import React from 'react';


const Sidebar = ({ time, bookmarked, blogTitl }) => {

    // console.log(blogTitl.length);
    // bookmarked.filter(e => e % 2 !== 0).map((e, i) => <h3 key={i}>{e}</h3>)
    const e = bookmarked.filter(e => e % 2 !== 0)
    // console.log(e);
    return (
        <div className='sticky top-0'>
            <div className=''>
                <h5 className='border-2 border-indigo-600 rounded-md bg-indigo-100 text-indigo-600 text-lg font-semibold p-5'>Spent time on read: {time <= 0 ? 0 : time} min</h5>
            </div>
            <div className='bg-slate-200 p-3 my-3 rounded-md'>
                <h3 className='border-2 rounded-md  text-xl font-bold p-5'>Bookmarked Blogs: {blogTitl.length}</h3>
                <div className=' p-2'>
                    {
                        blogTitl.map((e, i) => <h3 className='bg-white p-3 m-2 font-semibold text-base rounded-md' key={i}>{e}</h3>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;