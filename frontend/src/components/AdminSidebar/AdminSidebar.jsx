import { Link } from "react-router-dom";

function AdminSidebar() {

    return (

        <div className="w-64 bg-pink-700 text-white min-h-screen p-8">

            <h2 className="text-3xl font-bold mb-10">

                Lee Trends

            </h2>

            <div className="flex flex-col gap-5">

                <Link to="/admin">
                    Dashboard
                </Link>

                <Link to="/admin/upload">
                    Upload Dress
                </Link>

                <Link to="/admin/testimonials">
                    Testimonials
                </Link>

                <Link to="/collections">
                    Website
                </Link>

            </div>

        </div>

    );

}

export default AdminSidebar;