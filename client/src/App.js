import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Catalogue from './components/Catalogue/Catalogue';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Catalogue />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;