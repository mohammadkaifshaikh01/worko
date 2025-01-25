import React from 'react'

const List = ({ referrals, changeStatus }) => {
  return (
    <div>
  
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
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
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-2 border">{referral.name}</td>
              <td className="px-4 py-2 border">{referral.email}</td>
              <td className="px-4 py-2 border">{referral.experience}</td>
              <td className="px-4 py-2 border">{referral.status}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => changeStatus(index)}
                  className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded px-3 py-1"
                >
                  Change Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  



    </div>
  )
}

export default List
