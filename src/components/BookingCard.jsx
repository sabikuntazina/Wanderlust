'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';

const BookingCard = ({destination}) => {
// console.log(destination)
  const { data: session } = authClient.useSession();
    const user = session?.user;

  const [departureDate, setDepartureDate] =useState(null)
  const handleBooking=async()=>{
    const bookingData={
       userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        departureDate: new Date(departureDate),
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      destinationImageUrl: destination.imageUrl,
      country: destination.country,
    }
    console.log(bookingData)

    const {data:tokenData} = await authClient.token();
    console.log(tokenData)
       const res= await fetch(`${NEXT_PUBLIC_SERVER_URL}/bookings` , {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
        'authorization': `Bearer ${tokenData?.token}`
      },
       body : JSON.stringify(bookingData)
    })
    const result= await res.json();
    console.log(result)

  }
  return (
     <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-cyan-500">${destination.price}</h2>
      <p className="text-sm text-muted">per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button onClick={handleBooking} className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;