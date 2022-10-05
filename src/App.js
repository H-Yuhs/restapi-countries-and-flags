import Navbar from "./components/navbar";
import Home from "./pages/home";
import Countryinfo from "./pages/countryinfo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/country/:id' element={<Countryinfo />} ></Route >
      </Routes>
    </Router>
  );
}

export default App;
