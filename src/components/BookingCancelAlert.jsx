
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import AlertButton from './AlertButton';
import { revalidatePath } from 'next/cache';

const BookingCancelAlert = ({bookingId}) => {
  
  console.log(bookingId)
  const handleDelete=async()=>{
    'use server'
       const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}` , {
      method: 'DELETE',
      headers: {
        'Content-type' : 'application/json'
      },
    })
    const data= await res.json();
    
    revalidatePath('/my-bookings')
    console.log(data)
  };

  return (
    <AlertDialog>
      <Button
        className={" rounded-none border-red-500 text-red-500"}
        variant="outline"
      >
        <TrashBin /> Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
            </AlertDialog.Body>
           <AlertButton handleDelete={handleDelete} ></AlertButton>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingCancelAlert;