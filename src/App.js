import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
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
            <Route path="/" element={<BookList />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
          <BookForm />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
