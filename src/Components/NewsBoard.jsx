import { React, useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bb80c6fd5a77432780d86c17e81d30f0`

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
  }, [category])

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-success">News</span>
      </h2>
      <div className="row justify-content-center gx-4 gy-4">
        {articles.map((news, index) => (
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBoard