import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import UserAuthContextProvider from './context/UserAuthContext';

function App() {
  return (
    <div className='container'>
      <UserAuthContextProvider>
      <Router>
        <Routes >
          <Route exact path='/*' element={<Authentication />} />
          <Route exact path='/home/*' element={<Home />} />
        </Routes>
      </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
