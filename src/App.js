import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Ajout de la dépendance react-router-dom pour créer des routes

import Loader from "./Loader/Loader";
import Home from "./Pages/Home/Home";
import Devis from "./Pages/Devis/Devis";
import Factures from "./Pages/Factures/Factures";

const App = () => {
  // Création d'un état pour le loader
  const [loading, setLoading] = useState(false);

  // useEffect pour simuler un chargement
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
    {/* Si le chargement est en cours, on affiche le loader sinon on affiche les routes/pages */}
      {loading ? (
          <div className="loader__container">
              <Loader/>
          </div>
      ) : (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={ <Home/> } />
                  <Route path="/devis" element={ <Devis/> } />
                  <Route path="/factures" element={ <Factures/> } />
              </Routes>
          </BrowserRouter>
      )}
    </>
  );
}

export default App;
