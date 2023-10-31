import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <div style={{ display: 'flex' }}>
      <Footer />
      <Dashboard userId={12} />
    </div>
  </div>
  )
}

export default App
