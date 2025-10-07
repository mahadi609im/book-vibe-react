import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../pages/Home';
import BookList from '../pages/BookList';
import PageToRead from '../pages/pageToRead';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../pages/BookDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/booklist',
        Component: BookList,
      },
      {
        path: '/allBooks',
        Component: AllBooks,
      },
      {
        path: '/pageToRead',
        Component: PageToRead,
      },
      {
        path: '/bookDetails/:bookid',
        Component: BookDetails,
      },
    ],
  },
]);

export default router;
