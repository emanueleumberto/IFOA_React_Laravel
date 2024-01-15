import React from 'react'
import { ListGroup } from 'react-bootstrap'
import ListItemComponent from './ListItemComponent';

export default function UserlistComponent({ users, removeUser }) {

    return (
        <ListGroup defaultActiveKey="#link" className='my-3'>
            {users.map(user => <ListItemComponent key={user.id} user={user} removeUser={removeUser} />)}  
        </ListGroup>
    )

}
