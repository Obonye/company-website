
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/services/services'
import Processes from './components/process/processes'


function App() {
  

  return (
  
    <main>
      <div>
        <header><Navbar/></header>
        <Hero/>
        <section>
          <Services/>
        </section>
        <section>
          <Processes/>
        </section>
      </div>
    </main>
  )
}

export default App
