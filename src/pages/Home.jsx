import React from 'react';
import Banner from '../components/Banner';
import Book from '../components/Book';
import useDataLoad from '../Hooks/useDataLoad';

const Home = () => {
  const { books } = useDataLoad();
  const bookData = books.slice(0, 3);

  return (
    <div className="space-y-[100px]">
      <Banner></Banner>
      <div className="mb-[100px]">
        <h2 className="font-bold text-[40px] text-center">
          Books {bookData.length}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[36px]">
          {bookData &&
            bookData.map(book => <Book key={book.bookId} book={book}></Book>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
