import { React, useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bb80c6fd5a77432780d86c17e81d30f0`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.articles)) {
          setArticles(data.articles)
        } else {
          console.error('Invalid API response:', data)
          setArticles([])
        }
      })
      .catch(err => {
        console.error('Failed to fetch news:', err)
        setArticles([])
      })
  }, [])

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-success">News</span>
      </h2>
      {articles?.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  )
}

export default NewsBoard