import { useState } from 'react'
import GlobalStyle, { Container, MainContainer } from './GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Info from './pages/Info'
// import NotFound from './components/NotFound'
import Carousel from './pages/Carousel'
import GridGallery from './pages/GridGallery'
import LoginForm from './pages/LoginForm'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/grid-gallery" element={<GridGallery />} />
            <Route path="/login" element={<LoginForm />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App