// /main_directory/web/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from './webpage/ProjectPage';
import ExperimentPage from './webpage/ExperimentPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CognitiveEval-web" element={<ProjectPage />} />
        <Route path="/experiment/:id" element={<ExperimentPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;