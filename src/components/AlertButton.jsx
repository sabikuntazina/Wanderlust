'use client'
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const AlertButton = ({handleDelete}) => {
  return (
    <AlertDialog.Footer>
                 <Button slot="close" variant="tertiary">
                   Cancel
                 </Button>
                 <Button type='submit' onClick={handleDelete} slot="close" variant="danger">
                   Delete
                 </Button>
               </AlertDialog.Footer>
  );
};

export default AlertButton;