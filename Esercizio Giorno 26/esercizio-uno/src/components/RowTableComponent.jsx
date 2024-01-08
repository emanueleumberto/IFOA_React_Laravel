import React from 'react'

export const RowTableComponent = ({u}) => {
  return (
    <tr>
        <td>-</td>
        <td>{u.name}</td>
        <td>{u.username}</td>
        <td>{u.email}</td>
        <td>{u.phone}</td>
        <td>{u.website}</td> 
    </tr>
  )
}
