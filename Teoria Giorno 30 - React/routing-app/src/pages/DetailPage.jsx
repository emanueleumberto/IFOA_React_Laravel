import React, { useEffect, useState } from 'react'
import GetLocationComponent from '../components/GetLocationComponent'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card, ListGroup } from 'react-bootstrap'

export default function DetailPage() {

    const { id } = useParams() // { id: ''}
    /* const params = useParams();
    const id = params.id */
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState({});

    useEffect(() => {
      axios.get('http://localhost:3000/users/'+id)
            .then(response => {
                if(response.status === 200) {
                  setUserDetail(response.data)
                } else {
                    console.log("Errore Server!!!")
                }
            }).catch(error => console.error(error))
    }, [])
    

  return (
    <>
        <h1 className="text-center">DetailPage</h1>
        <GetLocationComponent />
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{userDetail.name}</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Username: {userDetail.username}</ListGroup.Item>
                <ListGroup.Item>Email: {userDetail.email}</ListGroup.Item>
                <ListGroup.Item>Phone: {userDetail.phone}</ListGroup.Item>
                <ListGroup.Item>Website: {userDetail.website}</ListGroup.Item>
              </ListGroup>
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/')}>Back</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    </>
  )
}
