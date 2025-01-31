"use client";
import { useState } from 'react';
import axios from 'axios';

const Referral = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('New');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setResume(null);
    } else {
      setError("");
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      setError("Please upload a PDF resume.");
      return;
    }

    try {
      // Prepare the data to be sent to Firebase Realtime Database
      const referralData = {
        name,
        email,
        experience,
        status,
        resume: resume.name, // Saving the file name
      };

      // Send POST request to Firebase Realtime Database
      const response = await axios.post(
        'https://referraldata-e7986-default-rtdb.firebaseio.com/referrals.json', 
        referralData
      );

      // Reset the form fields after successful submission
      setName('');
      setEmail('');
      setExperience('');
      setResume(null);
      setStatus('New');
      setError('');
      
      alert('Referral submitted successfully!');
    } catch (error) {
      setError('Error submitting referral: ' + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required
            className="border p-2 rounded w-full" />
        </div>
        
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
            className="border p-2 rounded w-full" />
        </div>
        
        <div>
          <label htmlFor="experience" className="text-sm font-medium text-gray-700">Experience:</label>
          <input type="text" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} required
            className="border p-2 rounded w-full" />
        </div>

        <div>
          <label htmlFor="resume" className="text-sm font-medium text-gray-700">Upload Resume (PDF only):</label>
          <input type="file" id="resume" onChange={handleFileChange}
            className="border p-2 rounded w-full" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit Referral</button>
      </form>
    </div>
  );
};

export default Referral;
