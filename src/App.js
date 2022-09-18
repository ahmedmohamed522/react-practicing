import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portofolio from "./Portofolio";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portofolio" element={<Portofolio />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
