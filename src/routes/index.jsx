import { Routes, Route } from "react-router-dom";



import Layout from "../layouts/layout";
import Home from "../pages/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
