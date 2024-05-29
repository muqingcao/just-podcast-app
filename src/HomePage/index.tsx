import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';
import { Route, Routes } from "react-router-dom";
import ByCategories from './ByCategory';

export default function HomePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BeforeLogin />} />
        <Route path="BeforeLogin" element={<BeforeLogin />} />
        <Route path="AfterLogin" element={<AfterLogin />} />
        <Route path="ByCategory" element={<ByCategories />} />
      </Routes>
    </div>
  );
}