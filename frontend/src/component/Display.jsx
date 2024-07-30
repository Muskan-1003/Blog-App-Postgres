import React from 'react';

const Display = ({ image }) => {
  return (
    <div>
      {/* If `image` is a URL string */}
      <img src={image} alt="uploaded" />

      {/* If `image` is a File object (needs createObjectURL) */}
      {/* <img src={URL.createObjectURL(image)} alt="uploaded" /> */}
    </div>
  );
};

export default Display;
