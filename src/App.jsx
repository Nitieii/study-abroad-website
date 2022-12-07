import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Homepage from "./pages/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
