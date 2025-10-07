import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Book = ({ book }) => {
  const { bookId, category, author, bookName, image, tags, rating } = book;

  const navigate = useNavigate('');

  return (
    <div
      onClick={() => navigate(`/bookDetails/${bookId}`)}
      className="card bg-base-100 w-full border border-[#13131326] p-6 shadow-sm cursor-pointer"
    >
      <div className="flex justify-center items-center w-full bg-[#F3F3F3] py-8 h-auto rounded-2xl">
        <div className="max-w-[120px] w-full h-[166px]">
          <img className="w-full h-full object-cover" src={image} alt="Shoes" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p className="font-medium">by : {author}</p>
        <div className="border border-dashed w-full border-[#13131326] my-5"></div>
        <div className="card-actions flex justify-between">
          <p className="flex gap-2 items-center text-lg">
            <FaRegStar />
            {rating}
          </p>
          <div>
            {tags.map((el, idx) => (
              <div key={idx} className="badge bg-[#23be0a0d] text-[#23BE0A]">
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
