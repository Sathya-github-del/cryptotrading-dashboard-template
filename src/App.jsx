import './App.css'
import Navbar from './components/navbar/navbar'
import Features from './components/features/features'
import Footer from './components/footer/footer'
import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Deposit from './components/Deposit';
import BuyCrypto from './components/BuyCrypto';
import SellCrypto from './components/SellCrypto';
import Markets from './components/Markets';
import Converter from './components/Converter';
import Wallet from './components/Wallet';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Features />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/buycrypto" element={<BuyCrypto />} />
          <Route path="/sellcrypto" element={<SellCrypto />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App;
