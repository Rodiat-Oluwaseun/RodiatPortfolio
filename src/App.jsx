import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import ProjectPage from './components/pages/ProjectPage';
import Contact from './components/pages/Contact';
// import "tailwindcss/tailwind.css"

function App() {
  return (
    <Router>
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="projectpage" element={<ProjectPage />} />
      
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
