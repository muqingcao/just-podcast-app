import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ShowDetail from './ShowDetail';
import EpisodeDetail from './EpisodeDetail';
import Home from './Home';

function App() {
  return (
    <HashRouter>
      <div className="h-200">      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showdetail" element={<ShowDetail />} />
          <Route path="/episodedetail" element={<EpisodeDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
