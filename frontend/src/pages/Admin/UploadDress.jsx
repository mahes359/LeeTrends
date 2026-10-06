import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { FiUploadCloud, FiArrowLeft, FiX, FiCheck } from "react-icons/fi";

const inputCls = "w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all";
const labelCls = "text-xs tracking-[0.25em] uppercase text-gray-500 block mb-2 font-medium";

function UploadDress() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    name: "", category: "", price: "", description: "",
    fabric: "", color: "", size: "", occasion: "",
    featured: false, available: true,
  });

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

  function removeImage() {
    setImage(null);
    setPreview(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!image) { toast.error("Please select an image"); return; }
    setLoading(true);
    const data = new FormData();
    Object.keys(form).forEach((k) => data.append(k, form[k]));
    data.append("image", image);
    try {
      await API.post("/dresses", data, { headers: { "Content-Type": "multipart/form-data" } });
      toast.success("Dress uploaded successfully!");
      navigate("/admin");
    } catch (err) {
      toast.error(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50/60 pb-12">

        {/* Header */}
        <div className="bg-white border-b border-gray-200/80 px-6 sm:px-8 py-5 flex items-center justify-between shadow-xs">
          <div>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Upload New Dress
            </h1>
            <p className="text-gray-400 text-xs mt-0.5 tracking-wide">Add a bespoke creation to your boutique portfolio</p>
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

            {/* Image Upload */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs sticky top-24">
                <p className={labelCls}>Dress Portrait *</p>
                {preview ? (
                  <div className="relative group rounded-xl overflow-hidden shadow-xs">
                    <img src={preview} alt="Preview" className="w-full aspect-[3/4] object-cover" />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-3 right-3 w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                      title="Remove image"
                    >
                      <FiX size={15} />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-[3/4] border-2 border-dashed border-gray-200 hover:border-rose-400 rounded-xl cursor-pointer transition-all bg-gray-50/50 hover:bg-rose-50/20 group p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FiUploadCloud size={26} />
                    </div>
                    <p className="text-gray-700 text-sm font-medium">Upload Image</p>
                    <p className="text-gray-400 text-xs mt-1">PNG, JPG or WebP (max 10MB)</p>
                    <span className="mt-4 px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-lg group-hover:border-rose-300 transition-colors">
                      Browse Files
                    </span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImage} required />
                  </label>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Dress Name *</label>
                    <input name="name" className={inputCls} placeholder="e.g. Royal Bridal Lehenga" onChange={handleChange} required />
                  </div>
                  <div>
                    <label className={labelCls}>Category *</label>
                    <select name="category" className={inputCls} onChange={handleChange} required defaultValue="">
                      <option value="" disabled>Select category</option>
                      {["Bridal", "Party Wear", "Ethnic", "Kids Wear"].map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Price (₹) *</label>
                    <input type="number" name="price" className={inputCls} placeholder="e.g. 15000" onChange={handleChange} required />
                  </div>
                  <div>
                    <label className={labelCls}>Occasion</label>
                    <input name="occasion" className={inputCls} placeholder="e.g. Wedding, Reception" onChange={handleChange} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Fabric Material</label>
                    <input name="fabric" className={inputCls} placeholder="e.g. Raw Silk, Pure Georgette" onChange={handleChange} />
                  </div>
                  <div>
                    <label className={labelCls}>Color Palette</label>
                    <input name="color" className={inputCls} placeholder="e.g. Crimson Red, Champagne Gold" onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Available Sizes</label>
                  <input name="size" className={inputCls} placeholder="e.g. S, M, L, XL or Bespoke Custom" onChange={handleChange} />
                </div>

                <div>
                  <label className={labelCls}>Description</label>
                  <textarea
                    name="description"
                    rows={4}
                    className={inputCls + " resize-none"}
                    placeholder="Describe the silhouette, hand-embroidery work, zardozi accents, styling notes..."
                    onChange={handleChange}
                  />
                </div>

                {/* Toggles */}
                <div className="flex flex-wrap gap-6 pt-3 border-t border-gray-100">
                  {[
                    { name: "featured", label: "Feature on Homepage" },
                    { name: "available", label: "Available for Order", defaultChecked: true },
                  ].map((t) => (
                    <label key={t.name} className="flex items-center gap-3 cursor-pointer group select-none">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name={t.name}
                          defaultChecked={t.defaultChecked}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-checked:bg-rose-600 transition-colors rounded-full" />
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium group-hover:text-rose-600 transition-colors">
                        {t.label}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full bg-rose-700 hover:bg-rose-800 text-white py-4 text-xs tracking-[0.25em] uppercase font-medium rounded-xl transition-all duration-300 disabled:opacity-60 shadow-md shadow-rose-700/20 cursor-pointer"
                >
                  {loading ? "Uploading Piece..." : "Publish Dress to Collection"}
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default UploadDress;
