import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import IArticle from '../interfaces/IArticle'
import { Button, Card } from 'react-bootstrap'

export default function DetailComponent() {

    const [article, setArticle] = useState<IArticle>()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v4/articles/' + id)
          .then(response => setArticle(response.data))
      }, [id])
    

  return (
    <>
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{article?.title}</Card.Title>
                <Card.Text>
                    Summary: {article?.summary}
                    News Site: {article?.news_site}
                    Featured: {article?.featured}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/articles')}>Back</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Published At: {article?.published_at}</Card.Footer>
        </Card>
    </>
  )
}
