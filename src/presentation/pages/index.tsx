import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageDetails from './PageDetails';
import Home from './Home';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageDetails.home.link} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
