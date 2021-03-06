import React, {Component} from 'react';
import Msg from './msg.jsx';
var axios = require('axios');

class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: []
    }

    this.getTheFeed = this.getTheFeed.bind(this);
  }

  getTheFeed(){
    axios.get('http://localhost:3000/feed')
    .then( (response) => {      
      this.setState({
        feed: response.data
      });

    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  componentDidMount(){
    //http://stackoverflow.com/questions/33988671/react-cannot-read-property-setstate-of-undefined
    //'this' is no longer bound to Feed inside Axios promise, use ()=> 
    axios.get('http://localhost:3000/feed')
    .then( (response) => {
      
      this.setState({
        feed: response.data
      });

    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
  
    const mainFeed = this.state.feed;
    return(
      <div className="feed">
        <h1>What the world is saying... <a onClick={this.getTheFeed} href=""><img id="refresh_svg" src="/output/image/refresh-page.svg" alt="refresh svg" /></a></h1> 
        
        {mainFeed.map((post)=><Msg key={post["_id"]} content={post} />)}


      </div>
    )
  }
}

export default Feed;