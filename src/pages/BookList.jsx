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
  const wishlistStoredData = getWishlistStoredData();
  const { books } = useDataLoad();

  const storedReadBooks = books.filter(book =>
    readStoredData.includes(book.bookId)
  );
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
            <div className="">
              {storedReadBooks &&
                storedReadBooks.map(book => (
                  <ReadBooks key={book.bookId} book={book}></ReadBooks>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="">
              {storedWishlistBooks &&
                storedWishlistBooks.map(book => (
                  <ReadBooks key={book.bookId} book={book}></ReadBooks>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookList;
