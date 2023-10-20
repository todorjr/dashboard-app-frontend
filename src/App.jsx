import './styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';


function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <div style={{ display: 'flex', flex: 1 }}>
      <Footer />
      <Dashboard userId={18} />
    </div>
  </div>
  )
}

export default App
