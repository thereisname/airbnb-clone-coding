import './App.css'
import CardsComponent from '../src/CardsComponent.jsx'
import Navigation from '../src/Navigation.jsx'
import data from '../data.json'

function App() {
  return (
    <>
      <Navigation />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-10 md:px-20'>
        {data.roomInfo.map((d) => (
          <CardsComponent key={d.roomId} data={d} />
        ))}
      </div>
    </>
  )
}

export default App
