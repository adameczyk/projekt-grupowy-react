import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MovieCard } from '../components/WeatherCard';
import { SearchBar } from '../components/SearchBar';
import { MovieContext } from '../contexts/WeatherContext';

const BASE_URL = 'https://api.tvmaze.com';

export const Home = () => {
  const { favorites, addFavorite, removeFavorite, watchlist, addToWatchlist, removeFromWatchlist } = useContext(MovieContext);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchShows = async (query = '') => {
    setLoading(true);
    setError(null);
    try {
      let url;
      if (query) {
        url = `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`;
      } else {
        url = `${BASE_URL}/shows?page=0`;
      }
      const response = await axios.get(url);
      
      if (query) {
        setShows(response.data.map(item => item.show) || []);
      } else {
        setShows(response.data || []);
      }
    } catch (err) {
      setError('Nie udało się pobrać danych. Spróbuj ponownie.');
      setShows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const handleFavoriteToggle = (show) => {
    if (favorites.find(fav => fav.id === show.id)) {
      removeFavorite(show.id);
    } else {
      addFavorite(show);
    }
  };

  const handleWatchlistToggle = (show) => {
    if (watchlist.find(item => item.id === show.id)) {
      removeFromWatchlist(show.id);
    } else {
      addToWatchlist(show);
    }
  };

  const isFavorite = (showId) => !!favorites.find(fav => fav.id === showId);
  const isInWatchlist = (showId) => !!watchlist.find(item => item.id === showId);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Baza Seriali TV</h1>
      
      <SearchBar onSearch={fetchShows} />

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center text-white py-8">Ładowanie...</div>
      )}

      {shows.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {shows.map((show) => (
            <MovieCard
              key={show.id}
              movie={{
                id: show.id,
                title: show.name,
                name: show.name,
                poster_path: show.image?.medium || null,
                overview: show.summary ? show.summary.replace(/<[^>]*>/g, '') : 'Brak opisu',
                vote_average: show.rating?.average || null
              }}
              isFavorite={isFavorite(show.id)}
              isInWatchlist={isInWatchlist(show.id)}
              onFavoriteToggle={handleFavoriteToggle}
              onWatchlistToggle={handleWatchlistToggle}
            />
          ))}
        </div>
      )}

      {shows.length === 0 && !loading && (
        <div className="text-center text-gray-300 py-8">Brak rezultatów</div>
      )}
    </div>
  );
};
