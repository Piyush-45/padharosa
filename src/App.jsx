import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Destination from './pages/Destination';
import "./index.css"
import Iternary from './components/Recommendations/Iternary';
function App() {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex flex-row flex-1  space-x-7 items-center justify-between ">
                <div>
                  <a href="/" className="flex items-center py-4 px-2">
                    <span className="font-bold text-gray-500 text-lg ">Padharo Sa</span>
                  </a>
                </div>
                <div>
                  <a href="/recommendations"  className=" text-md font-bold px-4 py-2 flex items-center hover:scale-105 bg-blue-800 rounded-lg text-white transition-all">
                  <span>Plan krlo</span>
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
            <Route path='/recommendations' element={<Iternary/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;