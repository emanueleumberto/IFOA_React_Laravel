import React from 'react'
import GetLocationComponent from '../components/GetLocationComponent'
import NavigateComponent from '../components/NavigateComponent'

export default function NotFoundPage() {
  return (
    <>
        <h1 className="text-center">NotFoundPage</h1>
        <GetLocationComponent />
        Torna in <NavigateComponent />
    </>
  )
}
