import React from 'react'
import { Link } from 'gatsby'
import Objects from './Objects/Objects'
import Search from './Search/Search'
import Header from './header'
import RandomArt from './randomArt'
import './searchContainer.css'
import earth from '../images/earth.svg'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      objects: props.objects,
      query: ``,
      sortBy: `popularity`,
      showingRandom: false,
    }
    this.onSearch = this.onSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onSearch(value, sortBy) {
    this.setState({
      objects: [],
      query: value,
      sortBy: sortBy,
      showingRandom: sortBy === 'random',
    });
  }

  handleClick() {
    this.setState({showingRandom: this.state.showingRandom})
  }

  render() {
    const content = this.state.showingRandom
      ? <RandomArt />
      : <Objects objects={this.state.objects} query={this.state.query} sortBy={this.state.sortBy} url={this.props.url}/>
    return (
      <div className="search-container">
        <div className="search-wrap">
          <Header isHome={true} onSearch={this.onSearch}/>
          <Link to='/map'><img src={earth} style={{marginRight:`5px`, width:`18px`}} alt='earth'/>Map view</Link>
          <Search sortBy={this.state.sortBy} onSearch={this.onSearch} />
        </div>
        {content}
      </div>
    )
  }
}

export default SearchContainer;
