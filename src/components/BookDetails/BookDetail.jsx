import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    console.log(data, book, bookId, id);

    const {image, bookName, author, category, review, } = book;

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
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;