import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiGrid, FiPlus, FiMessageSquare, FiLogOut, FiExternalLink } from "react-icons/fi";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: FiGrid, exact: true },
  { to: "/admin/upload", label: "Add Dress", icon: FiPlus },
  { to: "/admin/testimonials", label: "Testimonials", icon: FiMessageSquare },
];

function AdminLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-60 bg-gray-950 text-white flex flex-col shrink-0 hidden md:flex">
        <div className="p-7 border-b border-gray-800">
          <h1 className="text-xl font-bold tracking-widest text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            LEE TRENDS
          </h1>
          <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const active = item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-all ${
                  active ? "bg-rose-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <item.icon size={15} />
                {item.label}
              </Link>
            );
          })}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
          >
            <FiExternalLink size={15} />
            View Website
          </a>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-red-400 transition-colors w-full rounded-lg hover:bg-gray-800"
          >
            <FiLogOut size={15} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}

export default AdminLayout;
