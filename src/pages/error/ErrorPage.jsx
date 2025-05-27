import React from 'react';
import './partials/ErrorPage.css'; 

const ErrorPage = () => {
  return (
    <div className="page404-container">
      <h1>404</h1>
      <p>Oups ! La page que vous recherchez n'existe pas.</p>
      <a href="/" className="home-link">Retour à l'accueil</a>
    </div>
  );
};

export default ErrorPage;
