import React from "react"
import axios from "axios"

class Story extends React.Component{
    constructor(props) { 
        super(props)
    
        this.state = {
          news: []
        }
      }

    componentDidMount() {
          axios.get(`http://localhost:3000/news/${window.location.pathname.split("/")[2]}`)
            .then(response => {
                console.log(response)
               
                this.setState({
                  news: response.data
                })
            })
            .catch((error) => {
              console.log(error);
            })
        }

    render() {
        return(
            <div>
                <p>{this.state.news.title}{this.state.news.date}{this.state.news.picture}{this.state.news.story}</p>
            </div>
        )
    }
}

export default Story;