import React from 'react'
import config from '../config'
import { FaRedo } from 'react-icons/fa'
import './randomArt.scss'
import download from '../images/download.svg'

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
        }), error => this.setState({item:null})
      )
  }

  render() {
    const {item} = this.state
    if (!item) {
      return (<p className="random-container">we have some trouble to get you a random art :(</p>)
    }
    return (
      <div className="random-container">
        <a href={`${config.myminifactory_url}/object/${item.url}`} style={{display:`flex`, justifyContent:`center`}}>
          <img src={item.img} alt={item.title} style={{width:`50%`}}/>
        </a>
        <div className="random-intro">
          <div>
            <h1 id="random-title">{item.title}</h1>
            {item.artist &&
              <h3>{item.artist}</h3>
            }
            {item.place &&
              <h3>{item.place}</h3>
            }
          </div>
          <div className="random-widget">
            <a href={`${config.myminifactory_url}/download/${item.id}`} target='_blank' rel="noopener noreferrer">
              <img src={download} alt="download" style={{height:`24px`, width:`auto`, maxWidth:`none`}}/>
            </a>
            <span onClick={this.getRandomArt} style={{cursor:`pointer`}}><FaRedo size='24px' color="#25282a"/></span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: item.description}}/>
        {item.curator &&
          <h3 className="random-curator">Scanned by: <a href={item.curator.profile_url}>{item.curator.username}</a></h3>
        }
      </div>
    )
  }
}

export default RandomArt
