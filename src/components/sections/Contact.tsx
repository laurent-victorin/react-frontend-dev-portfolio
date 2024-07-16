import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_vpl5ecx', // Remplacez par votre Service ID
      'template_ij76f5t', // Remplacez par votre Template ID
      formData,
      'hhxb45m6zYOOutMlF' // Remplacez par votre Public Key
    ).then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully');
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email: ' + error.text);
    });
  };

  return (
    <section className="bg-[#1f1f1f] px-3 py-5 pb-20 md:px-0">
      <h2 className="pt-10 pb-5 text-center text-xl font-medium uppercase tracking-widest text-white">
        {t("contact.title")}
      </h2>

      <div className="flex flex-col items-center justify-center space-y-5">
        <p className="text-center text-white mb-6">
          {t("contact.content")}
        </p>
      </div>

      <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t("contact.form.name")}
          className="w-3/4 p-2 text-black bg-white rounded-md"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact.form.email")}
          className="w-3/4 p-2 text-black bg-white rounded-md"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder={t("contact.form.message")}
          className="w-3/4 p-2 text-black bg-white rounded-md"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="w-3/4 p-2 text-white bg-[#f76c6c] rounded-md">
          {t("contact.form.send")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
