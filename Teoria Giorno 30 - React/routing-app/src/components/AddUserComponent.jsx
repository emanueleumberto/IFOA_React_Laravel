import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'

export default function AddUserComponent({ handleSubmit, error }) {

    const [newUser, setNewUser] = useState({name: '', username: '', password: '', email: '', phone: '', website: ''});
    console.log(error)
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control 
                type="text" 
                name="fullname"
                value={newUser.name}
                placeholder="FullName..."
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        </Col>
        <Col>
          <Form.Control 
                type="text" 
                name="username" 
                value={newUser.username}
                placeholder="Username..."
                onChange={(e) => setNewUser({...newUser, username: e.target.value })} />
        </Col>
        <Col>
          <Form.Control 
                type="email" 
                name="email" 
                value={newUser.email}
                placeholder="Email..."
                onChange={(e) => setNewUser({...newUser, email: e.target.value })} />
        </Col>
        <Col>
          <Form.Control 
                type="password" 
                name="password" 
                value={newUser.password}
                placeholder="Password..."
                onChange={(e) => setNewUser({...newUser, password: e.target.value })} />
        </Col>
        <Col>
          <Form.Control 
                type="text" 
                name="phone"
                value={newUser.phone} 
                placeholder="Phone..."
                onChange={(e) => setNewUser({...newUser, phone: e.target.value })} />
        </Col>
        <Col>
          <Form.Control 
                type="text" 
                name="website" 
                value={newUser.website}
                placeholder="Website..."
                onChange={(e) => setNewUser({...newUser, website: e.target.value })} />
        </Col>
        <Col>
            <Button variant="secondary" onClick={() => { 
              handleSubmit(newUser); 
              setNewUser({name: '', username: '', password: '', email: '', phone: '', website: ''});
              }}>Add User</Button>
        </Col>
      </Row>
      {error && <Alert variant={'danger'} className="my-2">{error}</Alert>}
    </Form>
  )
}
