import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

export default function Dashboard() {
const [error, setError] = useState('')
function handleLogout () {

}

  return (
    <>
      <Card>
      <h2 className='text-center mb-4'>Profile</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <strong>Email:</strong>{currentUser.em}

      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  );
}
