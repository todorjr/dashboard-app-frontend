import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import { getUserData } from './services/services';

function App() {
  const [userId, setUserId] = useState(18);

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUserData(userId);
      setUserId(userData.id);
    }
    fetchUserData();
  }, []); 
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard userId = { userId }/>,
    },
  ]);

  return (
    <React.StrictMode>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Footer />
          <RouterProvider router={ router } />
        </div>
      </div>
    </React.StrictMode>

  )
}

export default App


