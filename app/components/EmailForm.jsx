"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your Email JS credentials
    const serviceId = "service_1ficxdt";
    const templateId = "template_s60hrx7";
    const publicKey = "UtOnxNlc1Q4Mo4lPo";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Abhishek Jatav",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);

        // Show success alert and wait for user to click OK
        window.alert("Email sent successfully! Click OK");

        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");

        // Redirect or navigate to another page
        window.location.href = "/"; // Change this to your desired page URL
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        window.alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Contact Us
        </h2>

        <label className="block mb-4">
          <span className="text-gray-700">Your Name</span>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Your Email</span>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Your Message</span>
          <textarea
            cols="30"
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Send Email
        </button>
      </form>
    </div>
  );
}
