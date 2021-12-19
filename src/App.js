import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Explore from './Components/Explore/Explore';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

