import axios from 'axios'
import { useEffect, useState } from 'react'
import IArticle from '../interfaces/IArticle'
import CardComponent from './CardComponent'

export default function ArticlesComponent() {

  const [articles, setArticles] = useState<IArticle[]>([])
  

useEffect(() => {
  axios.get('https://api.spaceflightnewsapi.net/v4/articles')
    .then(response => setArticles(response.data.results))
}, [])


  return (
    <>
      
      {articles.map(article => (
         //titolo, data di pubblicazione, immagine di copertina
         <CardComponent article={article} />
      ))}
    </>
    
  )
}
