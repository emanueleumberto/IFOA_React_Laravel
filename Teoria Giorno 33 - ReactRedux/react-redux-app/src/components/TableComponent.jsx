import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap'
import RowTableComponent from './RowTableComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../actions';

export default function TableComponent() {

  const userlist = useSelector( state => state.users );
  const dispatch = useDispatch();

  useEffect(() => {
    /* if(userlist.length === 0) {
      dispatch(getAllUsers())
    } */
    console.log(userlist)
  }, [])
  

  return (
    <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>FullName</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                userlist && 
                userlist.map((row, index) => 
                  <RowTableComponent user={row} index={index} /> 
                  )
            }
             
        </tbody>
      </Table>
  )
}
