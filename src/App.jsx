import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
