import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import AppRoutes from "./routes/AppRoutes";

import useScrollToTop from "./hooks/useScrollToTop";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const AppContent = () => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />

      <Router>
        <AppContent />
      </Router>
    </>
  );
};

export default App;
