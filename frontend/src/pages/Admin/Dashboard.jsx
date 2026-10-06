import { useCallback, useEffect, useState } from "react";
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

  const fetchDresses = useCallback(async () => {
    try {
      const res = await API.get("/dresses");
      setDresses(res.data);
    } catch {
      toast.error("Failed to load dresses");
    }
  }, []);

  useEffect(() => {
    let active = true;
    API.get("/dresses")
      .then((res) => { if (active) setDresses(res.data); })
      .catch(() => { if (active) toast.error("Failed to load dresses"); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

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
    { label: "Total Dresses", value: total, icon: FiGrid, color: "bg-rose-600 text-white", border: "border-rose-100" },
    { label: "Available Now", value: available, icon: FiCheckCircle, color: "bg-emerald-600 text-white", border: "border-emerald-100" },
    { label: "Featured Pieces", value: featured, icon: FiStar, color: "bg-amber-500 text-white", border: "border-amber-100" },
  ];

  return (
    <AdminLayout>
      <div className="flex-1 overflow-auto">

        {/* Top bar */}
        <div className="bg-white border-b border-gray-200/80 px-6 sm:px-8 py-5 flex items-center justify-between shadow-xs">
          <div>
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Collection Overview
            </h2>
            <p className="text-gray-400 text-xs mt-0.5 tracking-wide">Manage, update, and showcase your bespoke dresses</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/admin/upload"
              className="btn-glow inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 text-xs tracking-widest uppercase font-medium rounded-xl shadow-sm transition-all"
            >
              <FiPlus size={15} />
              Add Dress
            </Link>
          </div>
        </div>

        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-6">

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-5 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className={`${s.color} w-13 h-13 rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                  <s.icon size={22} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-xs tracking-wide uppercase mt-0.5 font-medium">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Filters Bar */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-wrap gap-4 items-center shadow-xs">
            <div className="relative flex-1 min-w-[220px]">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                type="text"
                placeholder="Search by dress name..."
                className="w-full border border-gray-200 bg-gray-50/50 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all text-gray-700 cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {["All", "Bridal", "Party Wear", "Ethnic", "Kids Wear"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <span className="text-gray-400 text-xs font-medium px-3 py-1 bg-gray-50 rounded-lg">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </span>
          </div>

          {/* Table */}
          {loading ? (
            <div className="bg-white border border-gray-100 rounded-2xl p-16 text-center shadow-xs">
              <div className="w-10 h-10 border-2 border-rose-200 border-t-rose-600 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400 text-sm font-light">Loading collection...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white border border-gray-100 rounded-2xl p-16 text-center shadow-xs">
              <p className="text-4xl mb-3">🌸</p>
              <h3 className="text-lg font-semibold text-gray-700 mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                No dresses found
              </h3>
              <p className="text-gray-400 text-sm">Try adjusting your search query or category filter.</p>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/75">
                      <th className="text-left px-6 py-4 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold">Image</th>
                      <th className="text-left px-6 py-4 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold">Name</th>
                      <th className="text-left px-6 py-4 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold hidden md:table-cell">Category</th>
                      <th className="text-left px-6 py-4 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold">Price</th>
                      <th className="text-left px-6 py-4 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold hidden sm:table-cell">Status</th>
                      <th className="text-right px-6 py-4 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filtered.map((dress) => (
                      <tr key={dress.id} className="hover:bg-rose-50/30 transition-colors group">
                        <td className="px-6 py-4">
                          <img
                            src={dress.imageUrl}
                            alt={dress.name}
                            className="w-14 h-14 object-cover rounded-xl shadow-xs"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-gray-900 text-base" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                            {dress.name}
                          </p>
                          {dress.featured && (
                            <span className="inline-block mt-0.5 text-[9px] text-rose-600 font-semibold tracking-widest uppercase bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                              Featured
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm hidden md:table-cell font-light">{dress.category}</td>
                        <td className="px-6 py-4 text-rose-700 font-semibold text-sm">₹ {dress.price?.toLocaleString()}</td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          <span className={`inline-flex items-center text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-medium ${
                            dress.available
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-red-50 text-red-700 border border-red-200"
                          }`}>
                            {dress.available ? "Available" : "Sold Out"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/admin/edit/${dress.id}`}
                              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                              title="Edit Dress"
                            >
                              <FiEdit2 size={13} />
                            </Link>
                            <button
                              onClick={() => deleteDress(dress.id)}
                              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-red-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                              title="Delete Dress"
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
