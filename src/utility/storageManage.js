import { Bounce, toast } from 'react-toastify';

const getReadStoredData = () => {
  let readStoredData = localStorage.getItem('read');

  if (readStoredData) {
    return JSON.parse(readStoredData);
  } else {
    return [];
  }
};

const setReadStoredData = id => {
  const storedReadData = getReadStoredData();
  const storedWishlistData = getWishlistStoredData();

  if (storedReadData.includes(id)) {
    toast.error('Already added in read', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  } else {
    storedReadData.push(id);
    let convertReadStr = JSON.stringify(storedReadData);
    localStorage.setItem('read', convertReadStr);
    if (storedWishlistData.includes(id)) {
      const newWishlist = storedWishlistData.filter(
        wishItem => wishItem !== id
      );
      let convertWishlistStr = JSON.stringify(newWishlist);
      localStorage.setItem('wishlist', convertWishlistStr);
      toast.success('Added & Remove from wishlist', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } else {
      toast.success('Added to Read', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  }
};

const getWishlistStoredData = () => {
  let WishlistStoredData = localStorage.getItem('wishlist');

  if (WishlistStoredData) {
    return JSON.parse(WishlistStoredData);
  } else {
    return [];
  }
};

const setWishlistStoredData = id => {
  const storedWishlistData = getWishlistStoredData();
  let readStoredData = getReadStoredData();

  if (storedWishlistData.includes(id)) {
    toast.error('Already added in Wishlist', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  } else if (readStoredData.includes(id)) {
    toast.error('Already You Read it', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  } else {
    storedWishlistData.push(id);
    let convertWishlistStr = JSON.stringify(storedWishlistData);
    localStorage.setItem('wishlist', convertWishlistStr);
    toast.success('Added to Wishlist', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  }
};

export {
  setReadStoredData,
  getReadStoredData,
  setWishlistStoredData,
  getWishlistStoredData,
};
