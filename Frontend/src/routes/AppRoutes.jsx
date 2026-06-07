import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const ProjectPage = lazy(() => import("../pages/ProjectPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/projects/:slug"
        element={
          <Suspense>
            <ProjectPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
