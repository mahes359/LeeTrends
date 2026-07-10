import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../../services/testimonialService";

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
      <div className="p-6 md:p-10 max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-8" style={{ fontFamily: "Cormorant Garamond, serif" }}>
        Manage Testimonials
      </h1>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 mb-10 space-y-4">
        <h2 className="text-sm tracking-widest uppercase text-rose-600 font-medium">
          {editId ? "Edit Testimonial" : "Add Testimonial"}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            required
            placeholder="Customer Name"
            className="border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-rose-400 w-full"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          />
          <input
            placeholder="Role (e.g. Bride, Regular Customer)"
            className="border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-rose-400 w-full"
            value={form.role}
            onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
          />
        </div>
        <textarea
          required
          rows={3}
          placeholder="Review text..."
          className="border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-rose-400 w-full resize-none"
          value={form.text}
          onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
        />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Rating:</label>
            <select
              className="border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-rose-400"
              value={form.rating}
              onChange={e => setForm(f => ({ ...f, rating: Number(e.target.value) }))}
            >
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} ★</option>)}
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.visible}
              onChange={e => setForm(f => ({ ...f, visible: e.target.checked }))}
            />
            Visible on site
          </label>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-rose-600 text-white px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-rose-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : editId ? "Update" : "Add"}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => { setForm(empty); setEditId(null); }}
              className="border border-gray-300 text-gray-600 px-6 py-2.5 text-xs tracking-widest uppercase hover:border-gray-500 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="space-y-4">
        {list.map(t => (
          <div key={t.id} className="bg-white border border-gray-200 p-5 flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold text-gray-800 text-sm">{t.name}</span>
                <span className="text-rose-400 text-xs tracking-widest uppercase">{t.role}</span>
                <span className="text-amber-400 text-xs">{"★".repeat(t.rating)}</span>
                {!t.visible && <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5">Hidden</span>}
              </div>
              <p className="text-gray-500 text-sm italic">"{t.text}"</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => handleEdit(t)}
                className="text-xs text-rose-600 border border-rose-200 px-3 py-1.5 hover:bg-rose-50 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(t.id)}
                className="text-xs text-gray-500 border border-gray-200 px-3 py-1.5 hover:bg-gray-50 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {list.length === 0 && (
          <p className="text-center text-gray-400 py-12 text-sm">No testimonials yet. Add your first one above.</p>
        )}
      </div>
      </div>
    </AdminLayout>
  );
}

export default ManageTestimonials;
