import React from 'react';
import { useParams } from 'react-router';
import useDataLoad from '../Hooks/useDataLoad';
import {
  setReadStoredData,
  setWishlistStoredData,
} from '../utility/storageManage';

const BookDetails = () => {
  const { bookid } = useParams();
  const { books } = useDataLoad();

  const book = books.find(book => book.bookId === parseInt(bookid));
  const {
    bookId,
    category,
    author,
    bookName,
    image,
    tags,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book || {};

  const handleRead = id => {
    setReadStoredData(id);
  };

  const handleWishlist = id => {
    setWishlistStoredData(id);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-20">
      <div className="p-[32px] md:p-[56px] lg:p-[74px] bg-[#F3F3F3] w-full h-full flex justify-center items-center rounded-2xl">
        <img
          className="max-w-[200px] md:max-w-[300px] lg:max-w-[425px] w-full h-auto"
          src={image}
        />
      </div>
      <div className="w-full h-auto">
        <h2 className="text-[40px] font-bold text-[#131313] mb-4">
          {bookName}
        </h2>
        <p className="text-xl font-medium text-[#131313c9]">By: {author}</p>
        <div className="border-b w-full border-[#13131326] my-5"></div>
        <p className="text-xl font-medium text-[#131313c9]">{category}</p>
        <div className="border-b w-full border-[#13131326] my-5"></div>
        <p className="">
          <b>Review</b>{' '}
          <span className="text-base font-normal text-[#131313b0]">
            {review}
          </span>
        </p>
        <div className="mt-6 mb-2">
          <b>Tag</b>{' '}
          {tags &&
            tags.map((el, idx) => (
              <div key={idx} className="badge bg-[#23be0a0d] text-[#23BE0A]">
                {el}
              </div>
            ))}
        </div>
        <div className="border-b w-full border-[#13131326] my-5"></div>

        <div className="flex gap-[60px]">
          <div>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div>
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => handleRead(bookId)}
            className="text-lg font-semibold py-[18px] px-[28px] border border-[#1313134d] text-[#131313] rounded-lg cursor-pointer"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlist(bookId)}
            className="text-lg font-semibold py-[18px] px-[28px] border border-[#50B1C9] bg-[#50B1C9] text-white rounded-lg cursor-pointer"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
