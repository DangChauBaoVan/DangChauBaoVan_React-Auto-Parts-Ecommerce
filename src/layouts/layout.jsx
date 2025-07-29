import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import BackToTop from "../components/BackToTop/BackToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header cố định */}
      <Header />
        <Breadcrumb/>
      {/* Main: nền xám, chứa nội dung của từng trang */}
      <main className="flex-1 bg-gray-100 ">
        <Outlet />
      </main>

      {/* Footer cố định */}
      <Footer />
      <BackToTop />
    </div>
  );
}
