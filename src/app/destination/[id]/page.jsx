import DeleteModal from '@/components/DeleteModal';
import EditModal from '@/components/EditModal';
import Image from 'next/image';
import React from 'react';

const DestinationDetailsPage = async({params}) => {
  const {id} = await params;
  console.log(id);
  const res =await fetch(`http://localhost:5000/destination/${id}`);
  const data=await res.json();

  return (
    <div>
      <div className="hero bg-base-200">
        
  <div className="">
    <div className='flex justify-end gap-4 my-5'>

    <EditModal data={data}  ></EditModal>
    <DeleteModal data={data} ></DeleteModal>
    </div>
    <div className='hero-content flex-col'>
      <figure className="relative h-120 w-full">
    <Image
    src={data.imageUrl.trim()}
    alt='image'
    fill
    className='object-cover rounded-xl'
    >
    </Image>
  </figure>
    <div>
      <h1 className="text-5xl font-bold">{data.destinationName}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      
    </div>
    </div>
 
  </div>
</div>
      
    </div>
  );
};

export default DestinationDetailsPage;