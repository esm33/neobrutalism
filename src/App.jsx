import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NeoBrutalismLanding from './neo_brutalism_landing_react_demo.jsx'
import Timeline from './Timeline.jsx'
import Designers from './Designers.jsx'
import About from './About.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NeoBrutalismLanding />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
