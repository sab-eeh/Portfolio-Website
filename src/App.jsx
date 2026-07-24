import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/layout/Navbar"));
const Footer = lazy(() => import("./components/layout/Footer"));
import AppRoutes from "./routes/AppRoutes";

import useScrollToTop from "./hooks/useScrollToTop";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const AppContent = () => {
  useScrollToTop();

  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      <AppRoutes />
      <Suspense>
        <Footer />
      </Suspense>
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
