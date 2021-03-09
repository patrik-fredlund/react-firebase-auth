import React, {useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import  { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value ) {
return setError('Password do not match')
        }
        
        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef}required />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef}required />
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef}required />
                    </Form.Group>
                    <Button className='w-100' type='Submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
            <div className='w-100 text-center mt-2'></div>
            already have an account? Log in
        </>
    )
}
