import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/api";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { FiUploadCloud, FiArrowLeft, FiX } from "react-icons/fi";

const inputCls = "w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-rose-400 transition-colors";
const labelCls = "text-xs tracking-[0.3em] uppercase text-gray-400 block mb-2";

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
      <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Upload New Dress
          </h1>
          <p className="text-gray-400 text-xs mt-0.5">Add a new piece to your collection</p>
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

          {/* Image Upload */}
          <div className="lg:col-span-1">
            <p className={labelCls}>Dress Image</p>
            {preview ? (
              <div className="relative group">
                <img src={preview} alt="Preview" className="w-full aspect-[3/4] object-cover" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/60 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FiX size={14} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-[3/4] border-2 border-dashed border-gray-200 hover:border-rose-400 cursor-pointer transition-colors bg-white group">
                <FiUploadCloud className="text-gray-300 group-hover:text-rose-400 transition-colors mb-3" size={40} />
                <p className="text-gray-400 text-sm">Click to upload</p>
                <p className="text-gray-300 text-xs mt-1">JPG, PNG up to 10MB</p>
                <input type="file" accept="image/*" className="hidden" onChange={handleImage} required />
              </label>
            )}
          </div>

          {/* Form Fields */}
          <div className="lg:col-span-2 space-y-5">
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
                <input name="occasion" className={inputCls} placeholder="e.g. Wedding, Party" onChange={handleChange} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Fabric</label>
                <input name="fabric" className={inputCls} placeholder="e.g. Silk, Georgette" onChange={handleChange} />
              </div>
              <div>
                <label className={labelCls}>Color</label>
                <input name="color" className={inputCls} placeholder="e.g. Deep Red, Gold" onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Size</label>
              <input name="size" className={inputCls} placeholder="e.g. S, M, L, XL or Custom" onChange={handleChange} />
            </div>

            <div>
              <label className={labelCls}>Description</label>
              <textarea
                name="description"
                rows={4}
                className={inputCls + " resize-none"}
                placeholder="Describe the dress — fabric details, embroidery, styling notes..."
                onChange={handleChange}
              />
            </div>

            {/* Toggles */}
            <div className="flex gap-8 pt-2">
              {[
                { name: "featured", label: "Mark as Featured" },
                { name: "available", label: "Available for Booking", defaultChecked: true },
              ].map((t) => (
                <label key={t.name} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name={t.name}
                      defaultChecked={t.defaultChecked}
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
              className="w-full bg-rose-700 hover:bg-rose-800 text-white py-4 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-60 mt-2"
            >
              {loading ? "Uploading..." : "Upload Dress"}
            </button>
          </div>

        </form>
      </div>
      </div>
    </AdminLayout>
  );
}

export default UploadDress;
