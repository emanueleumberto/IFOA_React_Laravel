import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ListItemComponent({user, removeUser}) {

    const navigate = useNavigate();

    

  return (
    <ListGroup.Item action>
        {user.name}
        <div className="float-end">
            <Button 
                variant="outline-danger" 
                className='mx-1'
                onClick={() => removeUser(user)}>
                  <i className="bi bi-trash"></i>
            </Button>
            <Button 
                variant="outline-warning" 
                className='mx-1' 
                onClick={() => navigate('/detail/' + user.id)}>
                    <i className="bi bi-file-richtext"></i>
            </Button>
        </div>
    </ListGroup.Item>
  )
}
