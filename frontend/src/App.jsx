import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat";

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import DressDetails from "./pages/DressDetails";
import NotFound from "./pages/NotFound";

import Dashboard from "./pages/Admin/Dashboard";
import UploadDress from "./pages/Admin/UploadDress";
import EditDress from "./pages/Admin/EditDress";
import Login from "./pages/Admin/Login";
import ManageTestimonials from "./pages/Admin/ManageTestimonials";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin") || location.pathname === "/login";

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: "Jost, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.05em",
          },
        }}
      />

      {!isAdmin && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/dress/:id" element={<DressDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/upload" element={<ProtectedRoute><UploadDress /></ProtectedRoute>} />
        <Route path="/admin/edit/:id" element={<ProtectedRoute><EditDress /></ProtectedRoute>} />
        <Route path="/admin/testimonials" element={<ProtectedRoute><ManageTestimonials /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdmin && <WhatsAppFloat />}
    </>
  );
}

export default App;
