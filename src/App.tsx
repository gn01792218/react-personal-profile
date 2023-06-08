import Routers from './router/Routers'
import TheHero from './components/TheHero'
import TheFooter from './components/TheFooter'
function App() {
  return (
    <div className="App min-h-screen bg-black">
      <TheHero/>
      <section className='min-h-screen'>
        <Routers />
      </section>
      <TheFooter/>
    </div>
  )
}

export default App
