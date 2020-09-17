// import Axios from 'axios'
import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

class News extends React.Component {
    constructor(props) { 
        super(props)
    
        this.state = {
          news: []
        }
      }

    componentDidMount() {
          axios.get('http://localhost:3000/news/')
            .then(response => {
              if (response.data.length > 0) {
                this.setState({
                  news: response.data
                })
              }
            })
            .catch((error) => {
              console.log(error);
            })
        }

    render(){
        return(
            <div className='news'>
                <h1>News 72PC</h1>
                {
                  this.state.news.map(article =>(
                    <div>
                    <Link to ={`/news/${article._id}`}>{article.title}</Link>
                    <p>{article.date}</p>
                    </div>
                  )
                  )
                }
            </div>
        )
    }
}

export default News