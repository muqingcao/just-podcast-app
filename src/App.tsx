import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ShowDetail from './ShowDetail';
import EpisodeDetail from './EpisodeDetail';
import SearchResults from './SearchResults';
import Home from './Home';

function App() {
  return (
    <HashRouter>
      <div className="h-200">      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<ShowDetail />} />
          <Route path="/episode" element={<EpisodeDetail />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
