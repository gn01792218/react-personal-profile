import Routers from './router/Routers'
import TheHero from './components/TheHero'
import TheFooter from './components/TheFooter'
function App() {
  return (
    <div className="app">
      <TheHero />
      <section className='min-h-screen' id='routers-view'>
        <Routers />
      </section>
      <TheFooter/>
    </div>
  )
}

export default App
