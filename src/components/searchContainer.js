import React from 'react'
import Objects from './Objects/Objects'
import Search from './Search/Search'
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
          <section className="search-section">
            <Objects objects={this.state.objects} query={this.state.query} sortBy={this.state.sortBy} />
            <Search onSearch={this.onSearch} />
          </section>
        </div>
    );
  }
}

export default SearchContainer;
