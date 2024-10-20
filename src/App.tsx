import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/page5";
import Regulations from "./pages/regulations";
// import Viewer from "./pages/viewer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page5" element={<Page />} />
        <Route path="/regulations" element={<Regulations />} />
        {/* <Route path="/viewer" element={<Viewer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;