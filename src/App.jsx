import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Insights from "./pages/Insights/Insights";
import ProjectsArchive from "./pages/OurProjects/ProjectArchive/ProjectsArchive";
import ProjectSingle from "./pages/OurProjects/ProjectSingle/ProjectSingle";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/our-projects" element={<ProjectsArchive />} />
          <Route path="/our-projects/:slug" element={<ProjectSingle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
