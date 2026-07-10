import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiGrid, FiStar, FiCheckCircle } from "react-icons/fi";

function Dashboard() {
  const [dresses, setDresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const total = dresses.length;
  const featured = dresses.filter((d) => d.featured).length;
  const available = dresses.filter((d) => d.available).length;

  useEffect(() => { fetchDresses(); }, []);

  async function fetchDresses() {
    try {
      const res = await API.get("/dresses");
      setDresses(res.data);
    } catch {
      toast.error("Failed to load dresses");
    } finally {
      setLoading(false);
    }
  }

  async function deleteDress(id) {
    if (!window.confirm("Delete this dress permanently?")) return;
    try {
      await API.delete(`/dresses/${id}`);
      toast.success("Dress deleted");
      fetchDresses();
    } catch {
      toast.error("Failed to delete");
    }
  }

  const filtered = dresses
    .filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
    .filter((d) => category === "All" || d.category === category);

  const stats = [
    { label: "Total Dresses", value: total, icon: FiGrid, color: "bg-rose-600" },
    { label: "Available", value: available, icon: FiCheckCircle, color: "bg-emerald-600" },
    { label: "Featured", value: featured, icon: FiStar, color: "bg-violet-600" },
  ];

  return (
    <AdminLayout>
      <div className="flex-1 overflow-auto">

        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Dashboard
            </h2>
            <p className="text-gray-400 text-xs mt-0.5">Manage your boutique collection</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/admin/upload"
              className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 text-xs tracking-widest uppercase transition"
            >
              <FiPlus size={14} />
              Add Dress
            </Link>
          </div>
        </div>

        <div className="p-8">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 flex items-center gap-5 shadow-sm">
                <div className={`${s.color} w-12 h-12 flex items-center justify-center shrink-0`}>
                  <s.icon className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-xs tracking-wide mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white border border-gray-100 p-5 mb-6 flex flex-wrap gap-4 items-center shadow-sm">
            <div className="relative flex-1 min-w-[200px]">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input
                type="text"
                placeholder="Search dresses..."
                className="w-full border border-gray-200 pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-rose-400 transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-rose-400 transition-colors"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {["All", "Bridal", "Party Wear", "Ethnic", "Kids Wear"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <p className="text-gray-400 text-xs ml-auto">{filtered.length} items</p>
          </div>

          {/* Table */}
          {loading ? (
            <div className="bg-white border border-gray-100 p-16 text-center shadow-sm">
              <div className="w-10 h-10 border-2 border-rose-200 border-t-rose-600 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Loading collection...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white border border-gray-100 p-16 text-center shadow-sm">
              <p className="text-4xl mb-4">🌸</p>
              <p className="text-gray-400">No dresses found.</p>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left px-6 py-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">Image</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">Name</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-medium hidden md:table-cell">Category</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">Price</th>
                      <th className="text-left px-6 py-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-medium hidden sm:table-cell">Status</th>
                      <th className="text-right px-6 py-4 text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filtered.map((dress) => (
                      <tr key={dress.id} className="hover:bg-rose-50/30 transition-colors group">
                        <td className="px-6 py-4">
                          <img
                            src={dress.imageUrl}
                            alt={dress.name}
                            className="w-14 h-14 object-cover"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                            {dress.name}
                          </p>
                          {dress.featured && (
                            <span className="text-[10px] text-rose-500 tracking-widest uppercase">Featured</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm hidden md:table-cell">{dress.category}</td>
                        <td className="px-6 py-4 text-rose-600 font-semibold text-sm">₹ {dress.price?.toLocaleString()}</td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          <span className={`text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium ${
                            dress.available
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-red-50 text-red-700 border border-red-200"
                          }`}>
                            {dress.available ? "Available" : "Sold Out"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/admin/edit/${dress.id}`}
                              className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors"
                            >
                              <FiEdit2 size={13} />
                            </Link>
                            <button
                              onClick={() => deleteDress(dress.id)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 hover:border-red-400 hover:text-red-600 transition-colors"
                            >
                              <FiTrash2 size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
