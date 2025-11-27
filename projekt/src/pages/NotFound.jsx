import React from 'react';
import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-2xl text-gray-300 mb-8">Strona nie została znaleziona</p>
      
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Wróć na stronę główną
      </Link>
    </div>
  );
};
