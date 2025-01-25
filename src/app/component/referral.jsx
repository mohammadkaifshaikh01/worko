"use client";
import { useState } from 'react';

const Referral= ({ addReferral }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('New');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReferral = {
      name,
      email,
      experience,
      resume,
      status,
    };
    addReferral(newReferral);
    setName('');
    setEmail('');
    setExperience('');
    setResume(null);
    setStatus('New');
  };

  return (
   <div className="">

   
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 shadow rounded mt-20 border-7"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="experience" className="text-sm font-medium mb-1">
          Experience:
        </label>
        <input
          type="text"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="resume" className="text-sm font-medium mb-1">
          Upload Resume:
        </label>
        <input
          type="file"
          id="resume"
          onChange={(e) => setResume(e.target.files[0])}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="status" className="text-sm font-medium mb-1">
          Status:
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>New</option>
          <option>Evaluated</option>
          <option>Hired</option>
          <option>Rejected</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit Referral
      </button>
    </form>
    </div>
  );
};

export default Referral;
