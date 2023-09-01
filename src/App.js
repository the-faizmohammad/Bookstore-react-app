import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookListContainer from './components/BookListContainer';
import './App.css'; // Import the CSS file

function CategoriesPage() {
  return <h2>Categories Page Under Construction</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<BookListContainer />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
