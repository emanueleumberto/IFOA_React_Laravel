import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import IArticle from '../interfaces/IArticle';

interface IProps { article: IArticle }

export default function CardComponent({ article }: IProps) {

    const navigate = useNavigate();

  return (
        <Col key={article.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={article.image_url} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                Site: {article.news_site}
                Date: {article.published_at}
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/articles/' + article.id)}>Detail</Button>
            </Card.Body>
          </Card>
        </Col>
  )
}
