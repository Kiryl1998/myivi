import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home';
import Watch from '../../pages/watch/watch';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<Watch />} />
    </Routes>
  );
};
export default AppRoutes;
