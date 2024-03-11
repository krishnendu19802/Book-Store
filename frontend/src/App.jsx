import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addbook' element={<CreateBook />} />
      <Route path='/:id' element={<ShowBook />} />
      <Route path='/updatebook/:id' element={<EditBook />} />
      <Route path='/deletebook/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
