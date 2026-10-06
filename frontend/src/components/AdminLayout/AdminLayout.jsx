import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiGrid, FiPlus, FiMessageSquare, FiLogOut, FiExternalLink, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: FiGrid, exact: true },
  { to: "/admin/upload", label: "Add Dress", icon: FiPlus },
  { to: "/admin/testimonials", label: "Testimonials", icon: FiMessageSquare },
];

function AdminLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const sidebarContent = (
    <div className="flex flex-col h-full bg-gray-950 text-white">
      <div className="p-6 border-b border-gray-800/80 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-widest text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            LEE TRENDS
          </h1>
          <p className="text-rose-400 text-[10px] tracking-[0.3em] uppercase mt-0.5 font-medium">Admin Panel</p>
        </div>
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden text-gray-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Close sidebar"
        >
          <FiX size={20} />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <p className="px-4 py-2 text-[10px] tracking-[0.25em] uppercase text-gray-500 font-semibold">Menu</p>
        {navItems.map((item) => {
          const active = item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl font-medium transition-all duration-200 ${
                active
                  ? "bg-rose-700 text-white shadow-md shadow-rose-900/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-900"
              }`}
            >
              <item.icon size={16} className={active ? "text-white" : "text-gray-400"} />
              {item.label}
            </Link>
          );
        })}

        <div className="pt-4 mt-4 border-t border-gray-800/60">
          <p className="px-4 py-2 text-[10px] tracking-[0.25em] uppercase text-gray-500 font-semibold">Storefront</p>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-900 rounded-xl transition-all"
          >
            <FiExternalLink size={16} />
            View Website
          </a>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-800/80">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-rose-400 hover:bg-rose-950/30 transition-all w-full rounded-xl"
        >
          <FiLogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <header className="md:hidden bg-gray-950 text-white px-5 py-4 flex items-center justify-between border-b border-gray-800 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Open sidebar menu"
          >
            <FiMenu size={22} />
          </button>
          <div>
            <h1 className="text-lg font-bold tracking-widest text-white leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              LEE TRENDS
            </h1>
            <p className="text-rose-400 text-[9px] tracking-[0.25em] uppercase">Admin</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="text-xs tracking-wider uppercase text-gray-400 hover:text-rose-400 flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-gray-900 transition-colors"
        >
          <FiLogOut size={13} />
          Exit
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] h-full z-50 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-gray-950 flex flex-col shrink-0 hidden md:flex border-r border-gray-900 sticky top-0 h-screen">
        {sidebarContent}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto min-w-0">{children}</main>
    </div>
  );
}

export default AdminLayout;
