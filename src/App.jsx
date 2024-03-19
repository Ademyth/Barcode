import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './components/firebase';
import { signOut } from 'firebase/auth';
import CreateQr from './components/CreateQr';
import ReadQr from './components/ReadQr';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redirect to login page after successful logout
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='container-fluid'>
      <h1 className='my-5 text-center display-2'>Digital Information Security</h1>

      <div className='row'>
        <CreateQr />
        <ReadQr />
      </div>
      <div>
        <h2>{user && user.email}</h2>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
};

export default App;
