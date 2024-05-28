import React from 'react';
import { HashRouter, Route, Routes} from "react-router-dom";
import ShowDetail from './ShowDetail';
import EpisodeDetail from './EpisodeDetail';
import Home from './Home';
import SignIn from './LogIn/SignIn';
import SignUp from './LogIn/SignUp';
import UserAgreement from './LogIn/UserAgreement';
import ProfilePage from './Profile/ProfilePage';

function App() {
  return (
    <HashRouter>
      <div className="h-200">      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showdetail" element={<ShowDetail />} />
          <Route path="/episodedetail" element={<EpisodeDetail />} />
          <Route path="/LogIn/SignIn" element={<SignIn />} />
          <Route path="/LogIn/SignUp" element={<SignUp />} />
          <Route path="/LogIn/UserAgreement" element={<UserAgreement />} />
          <Route path="/Profile/*" element={<ProfilePage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
