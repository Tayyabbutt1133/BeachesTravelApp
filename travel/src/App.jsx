import './App.css'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Selects from './components/Selects'
import Sliders from './components/Sliders'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Sliders />
      <Footer/>
    </>
  )
}

export default App
