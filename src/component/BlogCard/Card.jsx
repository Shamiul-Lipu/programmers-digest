import React from 'react';

const Card = ({ singleData }) => {
    const { id, coverImg, author, blogTitle, personImg, publishedDate, readingTime, targetAudience } = singleData;
    console.log(singleData)
    return (
        <div className='py-3'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={coverImg} alt="coverImg" /></figure>
                <div className="my-4">
                    <div className='flex justify-between'>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className="btn btn-ghost btn-circle avatar">
                                <img className="w-10 rounded-full" src={personImg} />
                            </div>
                            <div>
                                <h6 className="card-title">{author}</h6>
                                <p>{publishedDate}</p>
                            </div>
                        </div>
                        <div className='flex justify-'>
                            <p>{readingTime} min read</p>
                            <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>

                        </div>
                    </div>
                    <p className='text-2xl font-bold my-2'>{blogTitle}</p>
                    <ol className='flex justify-start'>
                        {
                            targetAudience.map((tag, index) => <li className='me-3 my-3' key={index}>{tag}</li>)
                        }
                    </ol>
                    <p className='flex justify-start underline underline-offset-1 text-blue-700 cursor-pointer	'>Mark as read</p>
                </div>
            </div>
        </div>
    );
};

export default Card;