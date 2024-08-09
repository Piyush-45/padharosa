import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Destination from './pages/Destination';
import "./index.css"
function App() {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <a href="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">TravelAI</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/destination/:id" element={<Destination />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;