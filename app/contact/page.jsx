import React from 'react'
import EmailForm from '../components/EmailForm';

export default function page() {
  return (
    <div>
      <div className="ml-10">
        <span className="text-blue-400">Home</span>
        {` > `}
        <span>Contact Us</span>
      </div>
      <EmailForm />
    </div>
  );
}
