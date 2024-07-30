import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
      <button
        onClick={handleGoBack}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
