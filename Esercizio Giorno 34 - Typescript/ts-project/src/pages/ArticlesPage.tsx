import React from 'react'
import ArticlesComponent from '../components/ArticlesComponent'
import { Row } from 'react-bootstrap'

export default function ArticlesPage() {
  return (
    <>
      <h1>Articles</h1>
      <Row xs={1} md={4} className="g-4">
        <ArticlesComponent />
      </Row>
    </>
  )
}
