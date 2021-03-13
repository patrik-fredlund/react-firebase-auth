import React, { useS} from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Dashboard() {

function handleLogout () {

}

  return (
    <>
      <Card>
      <h2 className='text-center mb-4'>Profile</h2>
      {error && <Alert variant='danger'>{error}</Alert>}

      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  );
}
