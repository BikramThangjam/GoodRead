
import './App.css';
import AboutPage from './pages/AboutPage';
import AddReviewPage from './pages/AddReviewPage';
import BookDetailPage from './pages/BookDetailPage';
import BooksPage from './pages/BooksPage';
import ContactPage from './pages/ContactPage';
import HomePage from "./pages/HomePage/index"
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>  
      <div className="App">
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>     
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element = {<ProtectedRoute Component={BooksPage} />} />
            <Route path="/about" element={<ProtectedRoute Component={AboutPage} />} />
            <Route path="/contact" element={<ProtectedRoute Component={ContactPage} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn}/>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />       
            <Route path="/books/:id" element={<BookDetailPage />} />
            <Route path="/AddReview/:id" element={<AddReviewPage />} />
            <Route path="/profile" element={<ProfilePage />} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
