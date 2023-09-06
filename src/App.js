import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookListContainer from './components/BookListContainer';
import Navigation from './components/navigation';
import './styles/App.css';

function CategoriesPage() {
  return <h2>Categories Page Under Construction</h2>;
}

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<BookListContainer />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
    </Provider>

  );
}

export default App;
