"use client";
import React, { useState } from 'react';

import List from '../component/list'; 
import Referral from '../component/referral'; 

const Page = () => {
  const [referrals, setReferrals] = useState([]);

  const addReferral = (newReferral) => {
    setReferrals([...referrals, newReferral]);
  };

  const changeStatus = (index) => {
    const updatedReferrals = [...referrals];
    const statuses = ['New', 'Evaluated', 'Hired', 'Rejected'];
    const currentStatusIndex = statuses.indexOf(updatedReferrals[index].status);

  
    updatedReferrals[index].status =
      statuses[(currentStatusIndex + 1) % statuses.length];
    setReferrals(updatedReferrals);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
     
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">
          Candidate Referral Portal
        </h1>
      </header>
    
      <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded">
       
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Raise New Referral
          </h2>
          <Referral addReferral={addReferral} />
        </section>

      
        <section>
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Referral Candidates
          </h2>
          <List referrals={referrals} changeStatus={changeStatus} />
        </section>
      </div>
    </div>
  );
};

export default Page;
