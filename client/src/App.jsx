import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/UserPages/Signup";
import Login from "./pages/UserPages/Login";
import Loading from './components/Loading'
import { userAuthStore } from './utilis/user';
import emailVerification from  './pages/UserPages/emailVerification'
import Guest from './pages/Guest';


const ProtectedRoutes = ({children})=>{
  const { isAthenticated, user, isCheckingAuth }=userAuthStore()
  if (isCheckingAuth) return <Loading />

  if(!isAthenticated) return <Navigate to='/' replace/>

  return children;
};

const RedirectUser = ({children})=>{
  const { isAthenticated, isCheckingAuth } = userAuthStore()
  if (isCheckingAuth) return <Loading/>
  if(isAthenticated) return <Navigate  to='/home' replace/>

  return children
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/emailVerification' element={<emailVerification />}/>
        <Route path='/' element={<Guest/>}/>
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/signup" element={<RedirectUser><Signup /></RedirectUser>} />
        <Route path="/login" element={<RedirectUser><Login /></RedirectUser>} />
      </Routes>
    </Router>
  );
}

export default App;
