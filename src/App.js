
import './App.css'

import {Nav, Bio, Gallery, Footer} from './components'



const App = () => {
  return (
    <div >
      <Nav />
      <div className="container">
        <Bio />
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}

export default App
