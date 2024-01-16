import React, { useEffect, useState } from 'react'
import GetLocationComponent from '../components/GetLocationComponent'
import UserlistComponent from '../components/UserlistComponent'
import AddUserComponent from '../components/AddUserComponent'
import axios from 'axios'

export default function HomePage() {
  
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
      
    // Soluzione con il fetch
    /* fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(json => setUsers(json)) */
    
    // Soluzione con axios
    axios.get('http://localhost:3000/users')
        .then(response => {
            if(response.status === 200) {
                setUsers(response.data)
            } else {
                console.log("Errore Server!!!")
            }
        }).catch(error => console.error(error))
 
}, [update])

const handleSubmit = (newUser) => {
  console.log(newUser)

  // Soluzione con il fetch
  /* fetch('http://localhost:3000/users' , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)})
  .then(response => response.json())
  .then(json => { console.log(json); setUpdate(!update)})
  .catch(error =>console.log(error)) */

  axios.post(`http://localhost:3000/users`, newUser)
      .then(response => setUpdate(!update))
      .catch(error => setError(error.response.data))
}

const removeUser = (obj) => {
  // Soluzione con il fetch
  /* fetch('http://localhost:3000/users/' + obj.id, {method: 'DELETE'})
      .then(response => response.json())
      .then(json => console.log(json)) */
  
  // Soluzione con axios
  axios.delete('http://localhost:3000/users/' + obj.id)
      .then(response => setUpdate(!update))
      .catch(error => console.error(error))
}
  
  return (
    <>
        <h1 className="text-center">HomePage</h1>
        <GetLocationComponent />
        {/* <Button variant="outline-dark" onClick={() => navigate("/detail/1")}>Detail 1</Button>
        <Button variant="outline-dark" onClick={() => navigate("/detail/2")}>Detail 2</Button>
        <Button variant="outline-dark" onClick={() => navigate("/detail/3")}>Detail 3</Button> */}
        <AddUserComponent handleSubmit={handleSubmit} error={error} />
        <UserlistComponent users={users} removeUser={removeUser} />
    </>
  )
}





