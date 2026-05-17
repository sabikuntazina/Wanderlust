import BookingCancelAlert from '@/components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage =async () => {
 
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

const user= session?.user;

  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`);
  const bookings =await res.json();
 
console.log(bookings)
  return (
    <div>
      <h2 className='font-bold text-2xl'>My Bookings</h2>
       <div className="space-y-5">
        {bookings.map((booking) => (
          <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
            <Image
              src={booking?.destinationImageUrl}
              alt='photo'
              height={200}
              width={200}
            />
            <div>
              <h1 className="font-bold text-2xl">{booking.destinationName}</h1>
              <p>
                {new Date(booking.departureDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <p>Booking Id: {booking._id}</p>

              <p className="text-3xl font-bold text-cyan-500">
                ${booking.price}
              </p>

              <BookingCancelAlert bookingId={booking._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;