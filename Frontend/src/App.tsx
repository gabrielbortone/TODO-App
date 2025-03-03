import { Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Home } from './Components/Task';
import { GlobalStyles } from './Components/GlobalStyles';

function App() {

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
