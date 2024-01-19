import React, { useEffect } from 'react';
import { Alert, Spinner, Table } from 'react-bootstrap'
import RowTableComponent from './RowTableComponent';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllUsers } from '../actions';
import { getAllUsers } from '../slice/usersSlice'

export default function TableComponent() {

  const userlist = useSelector( state => state.users.userlist );
  const loading = useSelector( state => state.users.loading );
  const error = useSelector( state => state.users.error );
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(userlist.length === 0) {
      dispatch(getAllUsers())
    }
    console.log(userlist)
    console.log(loading)
    console.log(error)
  }, [userlist, loading, error, dispatch])
  

  return (
    <>    
    { loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>  }

    { error  ? (<Alert variant="danger">
      <Alert.Heading>{error}</Alert.Heading>
    </Alert>) : (<Table striped bordered hover variant="dark">
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
    )}
      </>

  )
}
