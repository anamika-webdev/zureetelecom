// src/pages/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;