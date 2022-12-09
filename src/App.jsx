import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Students from "./pages/Students";
import Culture from "./pages/Culture";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Information from "./pages/Information";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/thong-tin-du-hoc" element={<Information />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/goc-du-hoc-sinh" element={<Students />} />
          <Route path="/van-hoa-cac-nuoc" element={<Culture />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
