import React from 'react';

function Footer() {
 

  return (
    <footer style={{ backgroundColor: '#ffede7', padding: '20px 0' }} >
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#7f4722' }}>Liens utiles</h5>
          <ul className="list-unstyled mb-0">
          
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Aide et support</a>
            </li>
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Politique de confidentialité</a>
            </li>
            <li>
              <a href="#!" style={{ color: '#4f4f4f' }}>Conditions d'utilisation</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#7f4722' }}>Contact</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <a href="mailto:jefffortune45@gmail.com" style={{ color: '#4f4f4f' }}>jefffortune45@gmail.com</a>
            </li>
            <li className="mb-1">
              <a href="tel:+509 4779 3318" style={{ color: '#4f4f4f' }}>+509 4779 3318</a>
            </li>
            <li className="mb-1">
              <a href="tel:+509 4040 9785" style={{ color: '#4f4f4f' }}>+509 4040 9785</a>
            </li>
           
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#7f4722' }}>Suivez-nous</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Instagram</a>
            </li>
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Twitter</a>
            </li>
            <li className="mb-1">
              <a href="#!" style={{ color: '#4f4f4f' }}>Facebook</a>
            </li>
          
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#7f4722' }}>À propos</h5>
          <p className="mb-0" style={{ color: '#4f4f4f' }}>
            Color Palette Generator est une application qui vous permet de générer et d'explorer
            différentes palettes de couleurs pour vos projets de conception. Explorez, créez et inspirez-vous !
          </p>
        </div>
      </div>
    </div>
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © {new Date().getFullYear()} Colorize. Tous droits réservés.
      {}
      {}
    </div>
  </footer>
  
  );
}

export default Footer;
