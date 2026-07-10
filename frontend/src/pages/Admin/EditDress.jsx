import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { FiUploadCloud, FiArrowLeft, FiX } from "react-icons/fi";

const inputCls = "w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-rose-400 transition-colors";
const labelCls = "text-xs tracking-[0.3em] uppercase text-gray-400 block mb-2";

function EditDress() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [form, setForm] = useState({
    name: "", category: "", price: "", description: "",
    fabric: "", color: "", size: "", occasion: "",
    featured: false, available: true,
  });

  useEffect(() => {
    API.get(`/dresses/${id}`)
      .then((res) => {
        const d = res.data;
        setForm({ name: d.name, category: d.category, price: d.price, description: d.description || "",
          fabric: d.fabric || "", color: d.color || "", size: d.size || "", occasion: d.occasion || "",
          featured: d.featured, available: d.available });
        setPreview(d.imageUrl);
      })
      .catch(() => toast.error("Failed to load dress"))
      .finally(() => setPageLoading(false));
  }, [id]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.keys(form).forEach((k) => data.append(k, form[k]));
    if (image) data.append("image", image);
    try {
      await API.put(`/dresses/${id}`, data);
      toast.success("Dress updated successfully!");
      navigate("/admin");
    } catch (err) {
      toast.error(err.response?.data?.error || "Update failed");
    } finally {
      setLoading(false);
    }
  }

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-2 border-rose-200 border-t-rose-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Edit Dress
          </h1>
          <p className="text-gray-400 text-xs mt-0.5">Update dress details and image</p>
        </div>
        <Link
          to="/admin"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-rose-600 transition-colors"
        >
          <FiArrowLeft size={14} />
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">

          {/* Image */}
          <div className="lg:col-span-1">
            <p className={labelCls}>Dress Image</p>
            <div className="relative group">
              {preview ? (
                <>
                  <img src={preview} alt="Preview" className="w-full aspect-[3/4] object-cover" />
                  <label className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center cursor-pointer">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center text-white">
                      <FiUploadCloud size={28} className="mx-auto mb-2" />
                      <p className="text-xs tracking-widest uppercase">Change Image</p>
                    </div>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
                  </label>
                </>
              ) : (
                <label className="flex flex-col items-center justify-center aspect-[3/4] border-2 border-dashed border-gray-200 hover:border-rose-400 cursor-pointer transition-colors bg-white">
                  <FiUploadCloud className="text-gray-300 mb-3" size={40} />
                  <p className="text-gray-400 text-sm">Click to upload</p>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
                </label>
              )}
            </div>
            <p className="text-gray-400 text-xs mt-2 text-center">Hover image to change</p>
          </div>

          {/* Fields */}
          <div className="lg:col-span-2 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Dress Name *</label>
                <input name="name" value={form.name} className={inputCls} onChange={handleChange} required />
              </div>
              <div>
                <label className={labelCls}>Category *</label>
                <select name="category" value={form.category} className={inputCls} onChange={handleChange} required>
                  {["Bridal", "Party Wear", "Ethnic", "Kids Wear"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Price (₹) *</label>
                <input type="number" name="price" value={form.price} className={inputCls} onChange={handleChange} required />
              </div>
              <div>
                <label className={labelCls}>Occasion</label>
                <input name="occasion" value={form.occasion} className={inputCls} onChange={handleChange} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Fabric</label>
                <input name="fabric" value={form.fabric} className={inputCls} onChange={handleChange} />
              </div>
              <div>
                <label className={labelCls}>Color</label>
                <input name="color" value={form.color} className={inputCls} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Size</label>
              <input name="size" value={form.size} className={inputCls} onChange={handleChange} />
            </div>

            <div>
              <label className={labelCls}>Description</label>
              <textarea
                name="description"
                value={form.description}
                rows={4}
                className={inputCls + " resize-none"}
                onChange={handleChange}
              />
            </div>

            {/* Toggles */}
            <div className="flex gap-8 pt-2">
              {[
                { name: "featured", label: "Mark as Featured", checked: form.featured },
                { name: "available", label: "Available for Booking", checked: form.available },
              ].map((t) => (
                <label key={t.name} className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name={t.name}
                      checked={t.checked}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-gray-200 peer-checked:bg-rose-600 transition-colors rounded-full" />
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform" />
                  </div>
                  <span className="text-sm text-gray-600">{t.label}</span>
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-700 hover:bg-rose-800 text-white py-4 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </form>
      </div>
      </div>
    </AdminLayout>
  );
}

export default EditDress;
