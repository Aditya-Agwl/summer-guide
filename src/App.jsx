// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TimelinePage from "./pages/TimelinePage";
import ProfilesPage from "./pages/ProfilesPage";
import SDEProfile from "./pages/SDEProfile";
import DataProfile from "./pages/DataProfile";
import ProfilesNonTech from "./pages/ProfilesNonTech";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <nav className="bg-[#1f1f1f] text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">Summer Guide</Link>
          <div className="space-x-6 text-lg">
            <Link to="/" className="hover:text-purple-400 transition">Home</Link>
            <Link to="/timeline" className="hover:text-purple-400 transition">Timeline</Link>
            <Link to="/profiles" className="hover:text-purple-400 transition">6 Profiles</Link>
            <Link to="/resources" className="hover:text-purple-400 transition">Resources</Link>

          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/profiles/sde" element={<SDEProfile />} />
        <Route path="/profiles/data" element={<DataProfile />} />
        <Route path="/profiles/non-tech" element={<ProfilesNonTech />} />
        <Route path="/resources" element={<Resources />}/>
      </Routes>
    </Router>
  );
}

export default App;
