import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Dashboard() {

function handleLogout () {

}

  return (
    <>
      <Card>
      <h2 className='text-center mb-4'>P</h2>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  );
}
