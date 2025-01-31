import React from 'react';

const Listui = ({ referrals, changeStatus, deleteReferral }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <table className="w-full text-sm text-left border border-gray-300 bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Experience</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {referrals.map((referral, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 border">{referral.name}</td>
              <td className="px-4 py-2 border">{referral.email}</td>
              <td className="px-4 py-2 border">{referral.experience}</td>
              <td className="px-4 py-2 border">
                <select 
                  value={referral.status} 
                  onChange={(e) => changeStatus(index, e.target.value)}
                  className="border p-1 rounded"
                >
                  <option value="New">New</option>
                  <option value="Evaluated">Evaluated</option>
                  <option value="Hired">Hired</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td className="px-4 py-2 border">
                <button 
                  onClick={() => deleteReferral(index)} 
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listui;
