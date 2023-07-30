// Collection.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { generateCollection } from './Components/GenerateCollection'

const Collection = ({ setIsCollectionPage }) => {
  const location = useLocation();

  useEffect(() => {
    setIsCollectionPage(true);
    generateCollection(20);
    document.title = "Colorize";
  }, [setIsCollectionPage]);

  return (
    <div className="App">
       <div className="text-div">
        <h1>Colorize's Collection</h1>

        </div>
      <ul className="container"></ul>
    </div>
  );
};

export default Collection;
