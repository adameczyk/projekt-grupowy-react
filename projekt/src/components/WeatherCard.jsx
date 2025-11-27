import React, { useContext } from 'react';
import { MovieContext } from '../contexts/WeatherContext';

export const MovieCard = ({ movie, isFavorite, isInWatchlist, onFavoriteToggle, onWatchlistToggle }) => {
  const posterUrl = movie.poster_path || movie.image?.medium;
  
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
      <div className="relative">
        <img 
          src={posterUrl || 'https://via.placeholder.com/200x300?text=No+Image'}
          alt={movie.title || movie.name}
          className="w-full h-64 object-cover"
        />
        {movie.vote_average && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
            {movie.vote_average.toFixed(1)}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 truncate">
          {movie.title || movie.name}
        </h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
          {movie.overview || 'Brak opisu'}
        </p>
        
        <div className="flex gap-2">
          <button
            onClick={() => onFavoriteToggle(movie)}
            className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition ${
              isFavorite
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            ♥ {isFavorite ? 'Ulub.' : 'Dodaj'}
          </button>
          <button
            onClick={() => onWatchlistToggle(movie)}
            className={`flex-1 px-3 py-2 rounded text-sm font-semibold transition ${
              isInWatchlist
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            📌 {isInWatchlist ? 'Lista' : 'Później'}
          </button>
        </div>
      </div>
    </div>
  );
};
