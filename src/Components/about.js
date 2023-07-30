import React from 'react';
import  { useEffect } from 'react';

function About({setIsAboutPage}) {

    useEffect(() => {
        setIsAboutPage(true);
    
        document.title = "Colorize";
      }, [setIsAboutPage]);
      
  return (
    <div className='App'>
        <div className="text-div">
        <h1>À propos de Colorize</h1>

        </div>
 <div className='text-bottom'>
     
      <p>Bienvenue sur Colorize, un site pour créer et explorer des palettes de couleurs étonnantes.</p>
      <p>Notre objectif est de vous aider à trouver les combinaisons de couleurs parfaites pour vos projets de design et de développement.</p>
      <p>Explorez notre collection de palettes de couleurs générées aléatoirement ou créez vos propres palettes personnalisées.</p>
      <p>Nous espérons que Colorize vous inspirera et facilitera votre travail de conception.</p>
      <p>Amusez-vous à jouer avec les couleurs !</p>
    </div>
    </div>
   
  );
}

export default About;
