
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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element = {<ProtectedRoute Component={BooksPage} />} />
        <Route path="/about" element={<ProtectedRoute Component={AboutPage} />} />
        <Route path="/contact" element={<ProtectedRoute Component={ContactPage} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />       
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/AddReview/:id" element={<AddReviewPage />} />

      </Routes>
    </Router>
    // <div className="App">
    //   <HomePage/>
    //   <BooksPage/>
    //   <BookDetailPage/>
    //   <AddReviewPage/>
    //   <RegisterPage/>
    //   <LoginPage/>
    //   <ProfilePage />
    // </div>
  );
}

export default App;
