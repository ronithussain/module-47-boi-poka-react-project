import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card  border-2 border-gray-300 p-4">
                    <figure className='bg-base-300 py-8 rounded-xl'>
                        <img
                            src={image}
                            className='h-[200px] w-[150px]'
                            alt={bookName} />
                    </figure>
                    <div className="py-6">
                        <div className='flex gap-x-4 '>
                            {
                                tags.map((tag, idx )=> <button key={idx} className="btn btn-xs bg-green-100 text-green-500 mb-3">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-semibold pb-4 text-gray-500'>{author}</p>
                        <div className="border-b-4 mb-3 border-dashed"></div>
                        <div className="card-actions justify-between">
                            <div className='font-semibold text-gray-600'>{category}</div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-300" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;