import Navbar from "./components/Header/Navbar"
import AnnouncementBar from "./components/Header/AnnouncementBar"
import Hero from "./components/Main/Hero"
import Products from "./components/Main/Products"
import FooterSection from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <Products />
      <FooterSection />
    </div>
    
  )
}

export default App