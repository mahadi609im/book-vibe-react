import React, { useState } from 'react';
import useDataLoad from '../Hooks/useDataLoad';
import Book from '../components/Book';

const AllBooks = () => {
  const { books } = useDataLoad();

  const [searchValue, setSearchValue] = useState('');
  const searchCustomize = searchValue.trim().toLowerCase();

  const searchBooks = searchCustomize
    ? books.filter(book =>
        book.bookName.toLowerCase().includes(searchCustomize)
      )
    : books;

  return (
    <div className="mt-[48px] mb-[100px]">
      <div className="flex justify-between">
        <h2 className="font-bold text-[32px]">
          All Books{' '}
          <span className="text-sm font-medium text-[#131313cc]">
            ({searchBooks.length}) Books Found
          </span>
        </h2>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={e => setSearchValue(e.target.value)}
            defaultValue={searchValue}
            type="search"
            required
            placeholder="Search Books"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[36px]">
        {books &&
          searchBooks.map(book => <Book key={book.bookId} book={book}></Book>)}
      </div>
    </div>
  );
};

export default AllBooks;
