import React, { Component } from 'react';
import axios from 'axios';

export default class CreateStory extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onChangeStory = this.onChangeStory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      date: '',
      picture: '',
      story: '',
      news: []
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3000/news/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           news: response.data.map(newz => newz.title),
  //           title: response.data[0].title
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onChangePicture(e) {
    this.setState({
      picture: e.target.value
    })
  }

  onChangeStory(e) {
    this.setState({
      story: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
// 
    const stories = {
      title: this.state.title,
      date: this.state.date,
      picture: this.state.picture,
      story: this.state.story
    }

    console.log(stories);

    axios.post('http://localhost:3000/news/add', stories)
      .then(res =>  {
        console.log(res.data)
        window.location = '/news';
      });

    // window.location = '/news';
  }

  render() {
    return (
    <div>
      <h3>Create New Story</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title: </label>
          {/* <select ref="userInput" */}
            <input  
                type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
              {/* {
                this.state.news.map(function(newz) {
                  return <option 
                    key={newz}
                    value={newz}>{newz}
                    </option>;
                })
              } */}
          {/* </select> */}
        </div>
        <div className="form-group"> 
          <label>Date: </label>
          <input  
            type="date"
              required
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDate}
              />
        </div>
        <div className="form-group">
          <label>Picture: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.picture}
              onChange={this.onChangePicture}
              />
        </div>
        <div className="form-group">
          <label>Story: </label>
          <input
            required
            type='text'
            className='form-control'
            value={this.state.story}
            onChange={this.onChangeStory}
            />
        </div>

        <div className="form-group">
          <input type="submit" value="Create story Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}