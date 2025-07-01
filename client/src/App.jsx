import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/UserPages/Signup";
import Login from "./pages/UserPages/Login";
import Loading from './components/Loading';
import { userAuthStore } from './utilis/user';
import EmailVerification from './pages/UserPages/emailVerification';
import Guest from './pages/Guest';
import OneProduct from './pages/UserPages/OneProduct ';

// Protected route wrapper
const ProtectedRoutes = ({ children }) => {
  const { isAthenticated, isCheckingAuth } = userAuthStore();

  if (isCheckingAuth) return <Loading />;
  if (!isAthenticated) return <Navigate to="/" replace />;
  return children;
};

// Redirect if already logged in
const RedirectUser = ({ children }) => {
  const { isAthenticated, isCheckingAuth } = userAuthStore();

  if (isCheckingAuth) return <Loading />;
  if (isAthenticated) return <Navigate to="/home" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="/signup" element={<RedirectUser><Signup /></RedirectUser>} />
        <Route path="/login" element={<RedirectUser><Login /></RedirectUser>} />
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/emailVerification" element={<EmailVerification />} />

        {/* ✅ FIXED: dynamic product route */}
        <Route path="/product/:id" element={<OneProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
