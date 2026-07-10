const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
  whatsappLink: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`,
  instagram: import.meta.env.VITE_INSTAGRAM,
  businessName: import.meta.env.VITE_BUSINESS_NAME,
  beholdWidgetId: import.meta.env.VITE_BEHOLD_WIDGET_ID,
  email: import.meta.env.VITE_EMAIL,
  phone: import.meta.env.VITE_PHONE,
  phoneLink: `tel:+${import.meta.env.VITE_PHONE_LINK}`,
  address: import.meta.env.VITE_ADDRESS,
};

export default config;
