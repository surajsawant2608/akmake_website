import React, {useState} from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate Form Data
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/add-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29385.628617607425!2d72.69187660673614!3d22.979540287053734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e62b7acb97ed1%3A0x31edea5b0c476693!2sBakrol%20Bujrang%2C%20Gujarat%20382433!5e0!3m2!1sen!2sin!4v1742359769648!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }} // Corrected style syntax
          ></iframe>
          <div className="w-full max-w-full sm:max-w-sm sm:mt-10 md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white relative flex flex-wrap py-4 sm:py-6 rounded shadow-md text-sm sm:text-base">
            <div className="w-full sm:w-1/2 px-4 sm:px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs sm:text-sm">
                ADDRESS
              </h2>
              <p className="mt-1 text-xs sm:text-base">
                AKMAKE ENGINEERING, 50 Nandanvan IND Estate, Village Bakrol Bujrang Daskrol, AHMEDABAD, GUJARAT, 382430.
              </p>
            </div>

            <div className="w-full sm:w-1/2 px-4 sm:px-6 mt-2 sm:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs sm:text-sm">
                EMAIL
              </h2>
              <a href="mailto:akmakesales@gmail.com" className="text-red-500 leading-relaxed text-xs sm:text-base block break-words">
                akmakesales@gmail.com
              </a>

              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs sm:text-sm mt-2 sm:mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-xs sm:text-base">
                +91 9558832129
              </p>
            </div>
          </div>

        </div>
        <div className="lg:w-1/3 lg:px-8 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Get in Touch with Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">We’ll help you find the perfect product for your needs.</p>

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative mb-4 ">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-700 py-1 px-3 outline-none"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-700 py-1 px-3 outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message Input */}
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-gray-700 py-1 px-3 resize-none outline-none"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
          We’re committed to ensuring you have the best experience.
          </p>
        </div>
      </div>
    </section>
  );
}
