import React from 'react'
import Objects from './Objects/Objects'
import Search from './Search/Search'
import './container.css'

class Container extends React.Component {
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
        <div className="container">
          {this.props.children}
          <section className="search-section">
            <Objects objects={this.state.objects} query={this.state.query} sortBy={this.state.sortBy} />
            <Search onSearch={this.onSearch} />
          </section>
        </div>
    );
  }
}

export default Container;
