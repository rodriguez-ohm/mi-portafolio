import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
