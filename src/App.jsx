import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
