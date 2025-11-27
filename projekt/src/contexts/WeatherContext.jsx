import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const addFavorite = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter(fav => fav.id !== movieId));
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.find(item => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter(item => item.id !== movieId));
  };

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite, watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </MovieContext.Provider>
  );
};

