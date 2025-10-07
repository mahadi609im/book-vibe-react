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

  if (storedReadData.includes(id)) {
    alert('Already added');
  } else {
    storedReadData.push(id);
    let convertReadStr = JSON.stringify(storedReadData);
    localStorage.setItem('read', convertReadStr);
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

  if (storedWishlistData.includes(id)) {
    alert('Already added');
  } else {
    storedWishlistData.push(id);
    let convertWishlistStr = JSON.stringify(storedWishlistData);
    localStorage.setItem('wishlist', convertWishlistStr);
  }
};

export {
  setReadStoredData,
  getReadStoredData,
  setWishlistStoredData,
  getWishlistStoredData,
};
