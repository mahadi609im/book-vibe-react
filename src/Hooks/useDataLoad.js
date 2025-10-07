import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useDataLoad = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('../booksData.json')
      .then(data => setBooks(data.data))
      .catch(err => setError(err))
      .finally(setLoading(false));
  }, []);

  return { books, loading, error };
};

export default useDataLoad;
