import React from 'react'
import EmailForm from '../components/EmailForm';

export default function page() {
  return (
    <div>
      <div className="ml-10">
        <span className="text-customDark">Home</span>
        {` > `}
        <span className="text-blue-400">Contact</span>
      </div>
      <EmailForm />
    </div>
  );
}
