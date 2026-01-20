import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import About from "./About";
import "./App.css";
import Home from "./Home";
import NoMatch from "./NoMatch";
function App() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        padding: 5,
                        ...(isActive ? { color: "red" } : { color: "blue" }),
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        padding: 5,
                        ...(isActive ? { color: "red" } : { color: "blue" }),
                    })}
                >
                    About
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
