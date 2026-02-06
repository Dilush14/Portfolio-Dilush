import React, { useState } from "react"
import { FaEnvelope, FaPhone } from "react-icons/fa"
import instagram from "../assets/instagram.png"
import linkedIn from "../assets/linkedin.webp"
import github from "../assets/github.png"
import contactImg from "../assets/contact.png"

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`
  : null

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }))

    // Reset status once user starts editing again
    if (status !== "idle") setStatus("idle")
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim())
      newErrors.name = "Name is required"

    if (!formData.email.trim())
      newErrors.email = "Email is required"
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address"

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required"

    if (!formData.message.trim())
      newErrors.message = "Message is required"
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    if (!FORMSPREE_URL) {
      alert("Form not configured. Add VITE_FORMSPREE_FORM_ID to .env")
      return
    }

    setStatus("sending")

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error()

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-12 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos="fade-up"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            Get In{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: darkMode ? "#d1d5db" : "#4b5563",
            }}
          >
            Open to internship opportunities and collaborative projects — let’s get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          <div
            className="flex flex-col items-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
            <div className="mt-6 flex justify-center gap-4 sm:gap-5">
              {[
                { icon: github, alt: "GitHub", link: 'https://github.com/Dilush14' },
                { icon: linkedIn, alt: "LinkeIn", link: 'www.linkedin.com/in/dilush14' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-9 sm:h-9 object-contain ${
                      darkMode ? "" : "filter brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className='order-1 lg:order-2 space-y-4'
            data-aos='fade-left'
          >
            {/* Static contact details */}
            <div
              className='rounded-xl p-4 sm:p-5 md:p-6 border shadow-lg'
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #111827, #020617)'
                  : 'linear-gradient(to right, #ffffff, #f3f4f6)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
            >
              <div className='flex items-start'>
                <div className='text-orange-400 text-2xl mr-4 mt-1'>
                  <FaEnvelope />
                </div>
                <div>
                  <h3
                    className='text-base sm:text-lg font-semibold mb-1'
                    style={{ color: darkMode ? '#e5e7eb' : '#111827' }}
                  >
                    Email
                  </h3>
                  <p
                    className='text-sm sm:text-base'
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                  >
                    diludilush963@gmail.com
                  </p>
                </div>
              </div>
              <br />
              <div className='flex items-start'>
                <div className='text-orange-400 text-2xl mr-4 mt-1'>
                  <FaPhone />
                </div>
                <div>
                  <h3
                    className='text-base sm:text-lg font-semibold mb-1'
                    style={{ color: darkMode ? '#e5e7eb' : '#111827' }}
                  >
                    Phone
                  </h3>
                  <p
                    className='text-sm sm:text-base'
                    style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
                  >
                    +94 76 072 2346
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                  background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                  borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
              className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg'
            >

            <div className='grid grid-cols-1 gap-4'>

                {/* Name */}
                <div>
                <label
                    className='block mb-1 text-sm font-medium'
                    style={{ color: darkMode ? '#e5e7eb' : '#374151' }}
                >
                    Your Name <span className='text-orange-500'>*</span>
                </label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='e.g. Dilushgaran Sathasivam'
                    style={{
                    background: darkMode ? '#374151' : '#faede3',
                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                    color: darkMode ? 'white' : '#1f2937'
                    }}
                    className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                    required
                />
                {errors.name && (
                  <p className='mt-1 text-xs sm:text-sm text-red-400'>
                    {errors.name}
                  </p>
                )}
                </div>

                {/* Email */}
                <div>
                <label
                    className='block mb-1 text-sm font-medium'
                    style={{ color: darkMode ? '#e5e7eb' : '#374151' }}
                >
                    Email Address <span className='text-orange-500'>*</span>
                </label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='e.g. dilush@example.com'
                    style={{
                    background: darkMode ? '#374151' : '#faede3',
                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                    color: darkMode ? 'white' : '#1f2937'
                    }}
                    className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                    required
                />
                {errors.email && (
                  <p className='mt-1 text-xs sm:text-sm text-red-400'>
                    {errors.email}
                  </p>
                )}
                </div>

                {/* Phone */}
                <div>
                <label
                    className='block mb-1 text-sm font-medium'
                    style={{ color: darkMode ? '#e5e7eb' : '#374151' }}
                >
                    Phone Number <span className='text-orange-500'>*</span>
                </label>
                <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='e.g. +94 77 123 4567'
                    style={{
                    background: darkMode ? '#374151' : '#faede3',
                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                    color: darkMode ? 'white' : '#1f2937'
                    }}
                    className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all'
                    required
                />
                {errors.phone && (
                  <p className='mt-1 text-xs sm:text-sm text-red-400'>
                    {errors.phone}
                  </p>
                )}
                </div>

                {/* Message */}
                <div>
                <label
                    className='block mb-1 text-sm font-medium'
                    style={{ color: darkMode ? '#e5e7eb' : '#374151' }}
                >
                    Message <span className='text-orange-500'>*</span>
                </label>
                <textarea
                    rows='4'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Write your message here...'
                    style={{
                    background: darkMode ? '#374151' : '#faede3',
                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                    color: darkMode ? 'white' : '#1f2937'
                    }}
                    className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none'
                    required
                />
                {errors.message && (
                  <p className='mt-1 text-xs sm:text-sm text-red-400'>
                    {errors.message}
                  </p>
                )}
                </div>

                {/* Submit Button */}
                <button
                type='submit'
                disabled={status === "sending"}
                className='w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed'
                style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)'
                }}
                >
                {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className='mt-3 text-sm sm:text-base font-medium text-green-500'>
                    Thank you! Your message has been sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className='mt-3 text-sm sm:text-base font-medium text-red-500'>
                    Something went wrong. Please try again in a moment.
                  </p>
                )}

            </div>
            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
