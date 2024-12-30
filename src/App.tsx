import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App