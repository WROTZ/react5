import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import ReadProduct from './ReadProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Product Listing App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/update/:id" element={UpdateProduct} />
            <Route path="/delete/:id" element={DeleteProduct} />
            <Route path="/read" element={ReadProduct} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
