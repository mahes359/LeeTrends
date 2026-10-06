import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { FiUploadCloud, FiArrowLeft } from "react-icons/fi";

const inputCls = "w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all";
const labelCls = "text-xs tracking-[0.25em] uppercase text-gray-500 block mb-2 font-medium";

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
        setForm({
          name: d.name, category: d.category, price: d.price, description: d.description || "",
          fabric: d.fabric || "", color: d.color || "", size: d.size || "", occasion: d.occasion || "",
          featured: d.featured, available: d.available
        });
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
      <div className="min-h-screen bg-gray-50/60 pb-12">

        {/* Header */}
        <div className="bg-white border-b border-gray-200/80 px-6 sm:px-8 py-5 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Edit Dress
            </h1>
            <p className="text-gray-400 text-xs mt-0.5 tracking-wide">Update details and imagery for this design</p>
          </div>
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-gray-500 hover:text-rose-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100"
          >
            <FiArrowLeft size={14} />
            Back to Dashboard
          </Link>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-8">
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">

            {/* Image */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs sticky top-24">
                <p className={labelCls}>Dress Portrait</p>
                <div className="relative group rounded-xl overflow-hidden shadow-xs">
                  {preview ? (
                    <>
                      <img src={preview} alt="Preview" className="w-full aspect-[3/4] object-cover" />
                      <label className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center cursor-pointer">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center text-white p-4">
                          <FiUploadCloud size={30} className="mx-auto mb-2 text-rose-300" />
                          <p className="text-xs tracking-widest uppercase font-semibold">Change Portrait</p>
                          <p className="text-[10px] text-gray-300 mt-1">Click to select file</p>
                        </div>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
                      </label>
                    </>
                  ) : (
                    <label className="flex flex-col items-center justify-center aspect-[3/4] border-2 border-dashed border-gray-200 hover:border-rose-400 rounded-xl cursor-pointer transition-colors bg-gray-50/50 p-6 text-center">
                      <FiUploadCloud className="text-gray-300 mb-3" size={40} />
                      <p className="text-gray-500 text-sm font-medium">Click to upload</p>
                      <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
                    </label>
                  )}
                </div>
                <p className="text-gray-400 text-xs mt-3 text-center">Hover portrait to replace image</p>
              </div>
            </div>

            {/* Fields */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
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
                    <label className={labelCls}>Fabric Material</label>
                    <input name="fabric" value={form.fabric} className={inputCls} onChange={handleChange} />
                  </div>
                  <div>
                    <label className={labelCls}>Color Palette</label>
                    <input name="color" value={form.color} className={inputCls} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Available Sizes</label>
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
                <div className="flex flex-wrap gap-6 pt-3 border-t border-gray-100">
                  {[
                    { name: "featured", label: "Featured on Homepage", checked: form.featured },
                    { name: "available", label: "Available for Booking", checked: form.available },
                  ].map((t) => (
                    <label key={t.name} className="flex items-center gap-3 cursor-pointer select-none">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name={t.name}
                          checked={t.checked}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-checked:bg-rose-600 transition-colors rounded-full" />
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{t.label}</span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full bg-rose-700 hover:bg-rose-800 text-white py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-xl transition-all duration-300 disabled:opacity-60 shadow-md shadow-rose-700/20 cursor-pointer"
                >
                  {loading ? "Saving Changes..." : "Save Changes"}
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default EditDress;
