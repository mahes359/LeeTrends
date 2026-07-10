import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import DressDetails from "./pages/DressDetails";

import Dashboard from "./pages/Admin/Dashboard";
import UploadDress from "./pages/Admin/UploadDress";
import EditDress from "./pages/Admin/EditDress";
import Login from "./pages/Admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/dress/:id" element={<DressDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/upload"
          element={
            <ProtectedRoute>
              <UploadDress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute>
              <EditDress />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;