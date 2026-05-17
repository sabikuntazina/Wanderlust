import BookingCard from '@/components/BookingCard';
import DeleteModal from '@/components/DeleteModal';
import EditModal from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const DestinationDetailsPage = async({params}) => {
  const {id} = await params;
  // console.log(id);
  const {token}= await auth.api.getToken({
    headers: await headers()
  })
  console.log(token)
  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    {
      headers:{
        authorization: `Bearer ${token}`
       
      }
    }
  );
  const data=await res.json();
  // console.log(data)

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
    <BookingCard destination={data}></BookingCard>
    </div>
 
  </div>
</div>
      
    </div>
  );
};

export default DestinationDetailsPage;