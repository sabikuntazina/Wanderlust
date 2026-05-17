import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage =async () => {
  const res= await fetch('http://localhost:5000/destination');
  const destinations= await res.json();
  console.log(destinations)
  
  return (
    <div className='space-y-5 my-10'>
      <h2 className='text-2xl font-bold mt-10'>  Destinations</h2>
      <div className='grid grid-cols-3 gap-4'>

      {
        destinations.map(destination=><DestinationCard key={destination._id} destination={destination}></DestinationCard>)
      }
      </div>
    </div>
  );
};

export default DestinationPage;