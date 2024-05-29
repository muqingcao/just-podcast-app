import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ShowDetail from './ShowDetail';
import EpisodeDetail from './EpisodeDetail';
import HomePage from './HomePage';
import BeforeLogin from './HomePage/BeforeLogin';
import AfterLogin from './HomePage/AfterLogin';
import ViewEpisodes from './HomePage/ByCategory/ViewEpisodes';
import ByCategory from './HomePage/ByCategory';
function App() {
  return (
    <HashRouter>
      <div className="h-200"> 
        <Routes>
          <Route path="/" element={<BeforeLogin />} />
          <Route path="/BeforeLogin" element={<BeforeLogin />} />
          <Route path="/AfterLogin" element={<AfterLogin />} />
          <Route path="/ByCategory" element={<ByCategory />} />
          <Route path="/ByCategory/ViewEpisodes" element={<ViewEpisodes />} />
          <Route path="/showdetail" element={<ShowDetail />} />
          <Route path="/episodedetail" element={<EpisodeDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
