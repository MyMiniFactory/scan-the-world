import React from 'react'
import Objects from './Objects/Objects'
import Search from './Search/Search'
import Header from './header'
import './searchContainer.css'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: props.objects,
      query: ``,
      sortBy: `date`,
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value, sortBy) {
    this.setState({
      query: value,
      sortBy: sortBy,
    });
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-wrap">
          <Header isHome={true} />
          <Search onSearch={this.onSearch} />
        </div>
        <Objects objects={this.state.objects} query={this.state.query} sortBy={this.state.sortBy} url={this.props.url}/>
      </div>
    );
  }
}

export default SearchContainer;
