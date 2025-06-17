// src/sections/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Title from "../components/Title";
import { FaPaperPlane, FaEnvelope, FaUser, FaComments } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ success: false, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceId = "service_0vv9yet";
      const templateId = "template_q0gvdxr";
      const userId = "uMdH8rxuiIgje4a6A";

      await emailjs.send(serviceId, templateId, formData, userId);

      setSendStatus({
        success: true,
        message: t("messageSentSuccess"), // Usar la clave de traducción
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSendStatus({
        success: false,
        message: t("messageSentError"), // Usar la clave de traducción
      });
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setSendStatus({ success: false, message: "" });
      }, 5000);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Title>{t("contactTitle")}</Title>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t("sendMessage")}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("name")}
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t("yourName")}
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("email")}
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t("yourEmail")}
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("message")}
              </label>
              <div className="relative">
                <FaComments className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t("yourMessage")}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSending}
                alt={t("sendMessageButton")}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400"
              >
                <FaPaperPlane />
                {isSending ? t("sending") : t("sendMessageButton")}
              </button>

              {sendStatus.message && (
                <div
                  className={`mt-4 text-center py-2 rounded-lg ${
                    sendStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {sendStatus.message}
                </div>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-between"
        >
          <div className="bg-gradient-to-br from-[#00A4EF] to-blue-500 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t("contactInfo")}</h3>
            <p className="mb-6">{t("contactInfoDescription")}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-400 p-3 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4>{t("emailAddress")}</h4>
                  <p>dariotamburello@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-400 p-3 rounded-full">
                  <FaComments className="text-xl" />
                </div>
                <div>
                  <h4>{t("availability")}</h4>
                  <p>{t("responseTime")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              {t("whyUseForm")}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{t("receiveCopy")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{t("encryptedMessages")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{t("noSpam")}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
