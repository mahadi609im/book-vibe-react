import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../pages/Home';
import BookList from '../pages/BookList';
import AllBooks from '../pages/AllBooks';
import BookDetails from '../pages/BookDetails';
import Errorpage from '../components/Errorpage';
import PageToRead from '../pages/PageToRead';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <Errorpage />,
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
