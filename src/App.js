import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import TopHeader from './Components/Includes/TopHeader';
import Footer from './Components/Includes/Footer';

function App() {
  return (
    <Router>
        <TopHeader />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
        </Routes>  
        <Footer />
    </Router>
  );
}

export default App;
