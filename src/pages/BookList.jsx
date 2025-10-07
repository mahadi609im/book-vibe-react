import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  getReadStoredData,
  getWishlistStoredData,
} from '../utility/storageManage';
import useDataLoad from '../Hooks/useDataLoad';
import ReadBooks from '../components/ReadBooks';

const BookList = () => {
  const readStoredData = getReadStoredData();
  const { books } = useDataLoad();

  const storedReadBooks = books.filter(book =>
    readStoredData.includes(book.bookId)
  );

  const wishlistStoredData = getWishlistStoredData();
  const storedWishlistBooks = books.filter(book =>
    wishlistStoredData.includes(book.bookId)
  );

  return (
    <div className="mb-[100px]">
      <div className="w-full py-[34px] text-center bg-[#1313130d] rounded-2xl">
        <h3 className="text-[28px] font-bold text-[#131313]">Books</h3>
      </div>

      <div className="mt-[56px]">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {storedReadBooks.length > 0 ? (
              <div className="">
                {storedReadBooks &&
                  storedReadBooks.map(book => (
                    <ReadBooks key={book.bookId} book={book}></ReadBooks>
                  ))}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center p-[100px] bg-gray-100 rounded-2xl">
                <p className="text-[#13131399] text-lg font-medium">
                  No Books Reading
                </p>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {storedWishlistBooks.length > 0 ? (
              <div className="">
                {storedWishlistBooks &&
                  storedWishlistBooks.map(book => (
                    <ReadBooks key={book.bookId} book={book}></ReadBooks>
                  ))}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center p-[100px] bg-gray-100 rounded-2xl">
                <p className="text-[#13131399] text-lg font-medium">
                  No Books Added to wishlist
                </p>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookList;
