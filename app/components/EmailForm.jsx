"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/EmailForm.module.css";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrors({});

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs
        .send(
          "service_1ficxdt",
          "template_s60hrx7",
          {
            from_name: name,
            from_email: email,
            to_name: "Abhishek Jatav",
            message: message,
          },
          "UtOnxNlc1Q4Mo4lPo"
        )
        .then((result) => {
          console.log(result);
          setSuccessMessage("Email sent successfully!");
        })
        .catch((err) => {
          console.error("Error:", err);
          setSuccessMessage("Failed to send email. Please try again.");
        });
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccessMessage("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col mt-10  items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900">
      <div className="max-w-md w-full">
        <h1 className={`${styles.contact} font-fredoka font-bold text-2xl text-center m-5`}>Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && <p className="mt-1 text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`px-3 py-2 border w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={`px-3 py-2 border w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.message ? "border-red-500" : ""
              }`}></textarea>
            {errors.message && (
              <p className="mt-1 text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.button} w-full px-4 py-2 text-white bg-customDark rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {isSubmitting ? "Sending..." : "Send Email"}
          </button>

          {successMessage && (
            <div className="mt-4 bg-green-100 p-4 rounded-lg text-green-800 text-center">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
