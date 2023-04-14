import React from 'react'
import { Route ,Routes } from 'react-router-dom' ;
import Books from './Books';
import EditBook from './EditBook';
import Login from './Login';
import SingleBook from './SingleBook';
import Auth from '../components/Auth';
function mainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route
        path="/books/:id"
        element={
          <Auth>
           
            <SingleBook />
          </Auth>
        }
      />
      <Route path="/books/:id/edit" element={<EditBook />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
}

export default mainRoutes