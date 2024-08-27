'use client'

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required></textarea>

      <button className="bg-blue-400" type="submit">Send</button>

      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default ContactForm;
