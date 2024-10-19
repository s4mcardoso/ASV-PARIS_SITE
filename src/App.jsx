import Home from "../src/Pages/Home";
import { HashRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>

  )
}

export default App;
