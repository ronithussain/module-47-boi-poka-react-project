import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDb';
import { addToStoredWishList } from '../../Utility/addToWishList';

const BookDetail = () => {
    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    console.log(data, book, bookId, id);

    const {image, bookName, author, category, review, } = book;

    const handleMarkAsRead = (id) => {

        /**
         * 1. understand what to store or save: => bookId
         * 2. where to store: database
         * 3. array, list, collection: array akare rakhbo
         * 4. check: if the book is already in the readList.
         * 5. if not, then add the book to the list.
         * 6 if yes, do not add the book
         */
        addToStoredReadList(id);
    }
    
    const handleAddToWishList = (id)=> {
        addToStoredWishList(id);
    }

    return (
        <div>
            <h2 className='font-bold text-4xl'>BookDetails: {bookId}</h2>
            <div>
                <div className="hero border-4 p-1 rounded-lg mt-4">
                    <div className="hero-content flex-col lg:flex-row lg:py-12 ">
                        <div className='bg-base-300 flex justify-center py-8 lg:py-44 px-24 lg:px-16 rounded-lg'>
                        <img
                            src={image}
                            className=" md:w-[500px] lg:w-[1200px] rounded-lg shadow-2xl " />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-5xl font-bold">{bookName}</h1>
                            <p className="py-6">
                                {author}
                            </p>
                            <div className="divider"></div>
                            <p>{category}</p>
                            <div className="divider"></div>
                            <p>{review}</p>
                            <div className="divider"></div>


                            {/* mark as read or wishlist button */}
                            <div className='flex gap-x-1 sm:gap-x-6'>
                            <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-accent btn-outline bg-purple-800">Mark As Read</button>

                            <button onClick={()=>handleAddToWishList(bookId)} className="btn   btn-accent btn-outline bg-purple-800">Add To Wishlist</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;