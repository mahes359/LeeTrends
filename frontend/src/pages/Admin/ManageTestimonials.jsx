import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../../services/testimonialService";
import { FiMessageSquare, FiEdit2, FiTrash2, FiStar, FiCheck, FiX } from "react-icons/fi";

const empty = { name: "", role: "", text: "", rating: 5, visible: true };

function ManageTestimonials() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = () => getAllTestimonials().then(setList).catch(console.error);

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editId) await updateTestimonial(editId, form);
      else await createTestimonial(form);
      setForm(empty);
      setEditId(null);
      load();
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (t) => {
    setForm({ name: t.name, role: t.role, text: t.text, rating: t.rating, visible: t.visible });
    setEditId(t.id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this testimonial?")) return;
    await deleteTestimonial(id);
    load();
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50/60 pb-12">
        {/* Header */}
        <div className="bg-white border-b border-gray-200/80 px-6 sm:px-8 py-5 shadow-xs">
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Client Testimonials
          </h1>
          <p className="text-gray-400 text-xs mt-0.5 tracking-wide">Manage bride and client reviews displayed on your homepage</p>
        </div>

        <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
          {/* Add / Edit Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h2 className="text-sm tracking-[0.25em] uppercase text-rose-600 font-semibold flex items-center gap-2">
                <FiMessageSquare size={16} />
                {editId ? "Edit Testimonial" : "Add New Testimonial"}
              </h2>
              {editId && (
                <span className="text-[10px] tracking-wider uppercase px-2.5 py-0.5 bg-rose-50 text-rose-600 rounded-full font-medium">
                  Editing Mode
                </span>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-gray-500 block mb-1.5 font-medium">Customer Name *</label>
                <input
                  required
                  placeholder="e.g. Ananya Sharma"
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-gray-500 block mb-1.5 font-medium">Role / Occasion</label>
                <input
                  placeholder="e.g. Bride, Custom Bridal Order"
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all"
                  value={form.role}
                  onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-gray-500 block mb-1.5 font-medium">Review Text *</label>
              <textarea
                required
                rows={3}
                placeholder="Share the client's kind words about fabric, fit, detailing, or experience..."
                className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all resize-none"
                value={form.text}
                onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <label className="text-xs tracking-wider uppercase text-gray-500 font-medium">Rating:</label>
                  <select
                    className="border border-gray-200 bg-gray-50/50 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-all cursor-pointer font-medium text-amber-500"
                    value={form.rating}
                    onChange={e => setForm(f => ({ ...f, rating: Number(e.target.value) }))}
                  >
                    {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} {"★".repeat(n)}</option>)}
                  </select>
                </div>
                <label className="flex items-center gap-2 text-xs tracking-wider uppercase text-gray-600 cursor-pointer font-medium select-none">
                  <input
                    type="checkbox"
                    className="rounded accent-rose-600 w-4 h-4 cursor-pointer"
                    checked={form.visible}
                    onChange={e => setForm(f => ({ ...f, visible: e.target.checked }))}
                  />
                  Publish on Store
                </label>
              </div>

              <div className="flex items-center gap-3">
                {editId && (
                  <button
                    type="button"
                    onClick={() => { setForm(empty); setEditId(null); }}
                    className="px-5 py-2.5 text-xs tracking-widest uppercase border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow bg-rose-700 hover:bg-rose-800 text-white px-6 py-2.5 text-xs tracking-widest uppercase font-medium rounded-xl transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Saving..." : editId ? "Update Review" : "Add Review"}
                </button>
              </div>
            </div>
          </form>

          {/* Testimonials List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-sm tracking-[0.2em] uppercase text-gray-500 font-semibold">
                Published Reviews ({list.length})
              </h3>
            </div>

            {list.map(t => (
              <div
                key={t.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start gap-4 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="font-semibold text-gray-900 text-base" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                      {t.name}
                    </span>
                    {t.role && (
                      <span className="text-rose-600 text-[10px] tracking-widest uppercase bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                        {t.role}
                      </span>
                    )}
                    <span className="text-amber-400 text-xs tracking-wider">
                      {"★".repeat(t.rating)}
                    </span>
                    {!t.visible && (
                      <span className="text-[10px] text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full bg-gray-50 uppercase tracking-wider">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm italic font-light leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => handleEdit(t)}
                    className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Edit Review"
                  >
                    <FiEdit2 size={13} />
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Delete Review"
                  >
                    <FiTrash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
            {list.length === 0 && (
              <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-xs">
                <p className="text-3xl mb-2">✨</p>
                <p className="text-gray-500 text-sm">No testimonials added yet. Use the form above to add your first review.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ManageTestimonials;
