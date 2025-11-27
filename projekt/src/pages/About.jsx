import React from 'react';

export const About = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-white mb-6">O Aplikacji</h1>
      
      <div className="bg-gray-800 rounded-lg shadow-md p-6 text-white">
        <p className="text-gray-300 mb-4">
          Baza filmów i seriali to aplikacja do wyszukiwania i przeglądania informacji o filmach i serialach.
        </p>
        
        <h2 className="text-2xl font-bold text-white mb-3">Funkcje:</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Wyszukiwanie filmów i seriali po tytule</li>
          <li>Przeglądanie popularnych produkcji</li>
          <li>Dodawanie filmów do ulubionych</li>
          <li>Zarządzanie listą do obejrzenia</li>
          <li>Wyświetlanie ratingu i opisu</li>
          <li>Wyświetlanie plakatów filmowych</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-3">Technologie:</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>React - biblioteka do budowy interfejsu</li>
          <li>Tailwind CSS - stylowanie</li>
          <li>React Router - routing</li>
          <li>Axios - pobieranie danych</li>
          <li>The Movie Database API - dane o filmach</li>
        </ul>
      </div>
    </div>
  );
};
