import React from 'react'
import { RowTableComponent } from './RowTableComponent'

export const TableComponent = ({listaUtenti}) => {
  return (
    <table>
    <thead>
        <tr>
            <td>-</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
            <td>WebSite</td>        
        </tr>
    </thead>
    <tbody>
        { listaUtenti.map(u => <RowTableComponent u={u} />) }
    </tbody>
    </table>
  )
}
