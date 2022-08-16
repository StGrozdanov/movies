import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Catalogue from './components/Catalogue/Catalogue';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreateMovie from './components/CreateMovie/CreateMovie';
import UserMovieCollection from './components/UserMovieCollection/UserMovieCollection';
import LikedMovies from './components/LikedMovies/LikedMovies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import SearchMovies from './components/SearchMovies/SearchMovies';
import EditMovie from './components/EditMovie/EditMovie';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Catalogue />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreateMovie />} />
        <Route path='/my-collection' element={<UserMovieCollection />} />
        <Route path='/liked' element={<LikedMovies />} />
        <Route path='/search' element={<SearchMovies />} />
        <Route path='/details/:id' element={<MovieDetails />} />
        <Route path='/edit/:id' element={<EditMovie />} />
      </Routes>
      <Footer />
    </>
  );
} 

export default App;