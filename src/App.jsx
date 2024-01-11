import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/lawyers" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
