import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import UserAuthContextProvider from './context/UserAuthContext';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <div className='container'>
      <UserAuthContextProvider>
        <Router>
          <Routes >
            <Route exact path='/authentication/*' element={<Authentication />} />
            <Route exact path='/*' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
