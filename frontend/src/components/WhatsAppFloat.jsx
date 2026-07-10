import { FaWhatsapp } from "react-icons/fa";
import config from "../config";

function WhatsAppFloat() {
  return (
    <a
      href={config.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-green-500/40 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}

export default WhatsAppFloat;
