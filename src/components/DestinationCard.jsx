import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DestinationCard = ({destination}) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="relative h-60 w-full">
    <Image
    src={destination.imageUrl.trim()}
    alt='image'
    fill
    className='object-cover rounded-xl'
    >
    </Image>
  </figure>
  <div className="card-body">
    
    <h2 className="card-title">{destination.destinationName}</h2>
   <p>{destination.price}</p>
    <div className="card-actions justify-end">
      <Link href={`/destination/${destination._id}`}>
      <p className="text-cyan-400 font-semibold border-b-2 border-cyan-400">BOOK NOW</p>
      </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default DestinationCard;