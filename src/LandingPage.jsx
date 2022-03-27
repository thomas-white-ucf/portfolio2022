// import HomePage from "./components/pages/HomePage";
import { Layout } from "./components/layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResumePage from "./components/pages/ResumePage";
import ProjectDisplayPage from "./components/pages/ProjectDisplayPage";

//

const LandingPage = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="portfolio" element={<ProjectDisplayPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Routes>
    </Layout>
  );
};

export default LandingPage;
