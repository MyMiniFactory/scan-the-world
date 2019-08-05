import React from 'react'
import config from '../config'
import { FaRedo } from 'react-icons/fa'

class RandomArt extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      item: {}
    }
    this.getRandomArt = this.getRandomArt.bind(this)
  }

  componentDidMount() {
    this.getRandomArt()
  }

  getRandomArt() {
    fetch(config.randomObject)
      .then(res => res.json())
      .then(
        result => this.setState({
          item: result
        }), error => this.setState({item:{}})
      )
  }

  render() {
    const {item} = this.state
    if (!item) {
      return (<p style={{marginLeft:`260px`}}>we have some trouble to get you a random art :(</p>)
    }
    return (
      <div style={{marginLeft:`260px`}}>
        <a href={`${config.myminifactory_url}/object/${item.url}`} style={{display:`flex`, justifyContent:`center`}}>
          <img src={item.img} alt={item.title} style={{width:`50%`}}/>
        </a>
        <h1>{item.title}</h1>
        {item.artist &&
          <h2>{item.artist}</h2>
        }
        {item.place &&
          <h2>{item.place}</h2>
        }
        <a href={`${config.myminifactory_url}/download/${item.id}`} target='_blank' rel="noopener noreferrer">download</a>
        <span onClick={this.getRandomArt}><FaRedo /></span>
        <div dangerouslySetInnerHTML={{__html: item.description}}/>
        {item.curator &&
          <h2>Scanned by: <a href={item.curator.profile_url}>{item.curator.username}</a></h2>
        }
      </div>
    )
  }
}

export default RandomArt
