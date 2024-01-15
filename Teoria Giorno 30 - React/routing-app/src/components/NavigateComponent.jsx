import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NavigateComponent() {

    const navigate = useNavigate()

  return (
    <Button variant="outline-info" onClick={() => navigate("/")}>HomePage</Button>
  )
}
