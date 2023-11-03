import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter,  Navigate } from 'react-router-dom';
import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import { getUserData } from './services/services';

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const userData = await getUserData(userId);
      setUserId(userData.id);
    }

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={`/user/${userId}`} replace />,
    },
    {
      path: '/user/:userId',
      element: <Dashboard />,
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


