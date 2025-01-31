import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './listui'; 

const ReferralList = () => {
  const [referrals, setReferrals] = useState([]);

  // Fetch referrals from Firebase Realtime Database
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get(
          'https://referraldata-e7986-default-rtdb.firebaseio.com/referrals.json'
        );
        
        const fetchedReferrals = [];
        for (let key in response.data) {
          fetchedReferrals.push({
            id: key,
            ...response.data[key]
          });
        }

        setReferrals(fetchedReferrals);
      } catch (error) {
        console.error("Error fetching referrals:", error);
      }
    };

    fetchReferrals();
  }, []);

  // Change status of referral
  const changeStatus = async (index, status) => {
    const updatedReferrals = [...referrals];
    updatedReferrals[index].status = status;

    try {
      await axios.put(
        `https://referraldata-e7986-default-rtdb.firebaseio.com/referrals/${updatedReferrals[index].id}.json`,
        updatedReferrals[index]
      );
      setReferrals(updatedReferrals);
    } catch (error) {
      console.error("Error updating referral status:", error);
    }
  };

  // Delete referral
  const deleteReferral = async (index) => {
    const referralId = referrals[index].id;

    try {
      await axios.delete(
        `https://referraldata-e7986-default-rtdb.firebaseio.com/referrals/${referralId}.json`
      );
      const updatedReferrals = referrals.filter((_, i) => i !== index);
      setReferrals(updatedReferrals);
    } catch (error) {
      console.error("Error deleting referral:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-10">Referral List</h1>
      <List 
        referrals={referrals} 
        changeStatus={changeStatus} 
        deleteReferral={deleteReferral} 
      />
    </div>
  );
};

export default ReferralList;
