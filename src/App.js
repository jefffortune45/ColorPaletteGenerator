// App.js
import React, { useState } from 'react';
import  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { generatePalette } from './palette';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collection from './collection';
import Footer from './Components/footer';
import Navbar from './Components/header';
import About from './Components/about';


function App() {
  const [isCollectionPage, setIsCollectionPage] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);

  return (
    <Router>
      <div className="App">
       
          {newFunction()}

        {/* <div className="text-div">
          {isCollectionPage && <h1>Colorize's Collection</h1>}

        </div> */}

        

        <Routes>
          <Route path="/" element={<Home setIsCollectionPage={setIsCollectionPage} />} />
          <Route path="/collection" element={<Collection setIsCollectionPage={setIsCollectionPage} />} />
          <Route path="/about" element={<About setIsAboutPage={setIsAboutPage}/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

function newFunction() {
  return <Navbar />;
}

function Home({ setIsCollectionPage }) {
  useEffect(() => {
    setIsCollectionPage(false);
    generatePalette();
    document.title = "Colorize";
  }, [setIsCollectionPage]);

  return (
    <div className="App">

       <div className="text-div">
           <h1>Color palette generator</h1>

        </div>

      <ul className="container"></ul>
      <button className="refresh-btn" onClick={generatePalette}>
        Refresh
      </button>
      <div className='text-bottom'>
        <p>Découvrez une myriade de couleurs éblouissantes !<br></br>
           Cliquez sur votre préférée et trouvez la teinte parfaite pour illuminer votre monde créatif !</p>
      </div>
    </div>
  );
}

export default App;
