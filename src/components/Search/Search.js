import './Search.scss'

import React from 'react';
import Autosuggest from 'react-autosuggest';
import config from '../../config';

const adaptSuggestions = value => {
    return value.slice(0, 4).map(item =>
      ({ 
          name: item[1],
          image: item[2],
          designer: item[3],
          url: item[4]
      })
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className="search-suggestion" >
    <a href={suggestion.url}>
    <img className="image" alt="suggested object" src={suggestion.image}/>
    <div className="text" title={suggestion.name}>
        {suggestion.name}<br/>
        <span className="designer-name">{suggestion.designer}</span>
    </div>
    </a>
  </div>
);

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      sortBy: 'date',
      suggestions: []
    };
    this.onChange = this.onChange.bind(this)
    this.changeSorting = this.changeSorting.bind(this)
    this.keyPressed = this.keyPressed.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

  changeSorting(sortBy) {
    this.setState({
      sortBy: sortBy
    });
    this.props.onSearch(this.state.value, sortBy)
  }

    keyPressed = (event) => {
        if (event.key === "Enter") {
          this.setState({
            sortBy: 'popular' 
          });
          this.props.onSearch(this.state.value, 'popular')
        }
    };

    onSuggestionsFetchRequested = ({ value }) => {

      fetch(config.suggester_url + "/" + value + "?cat=112")
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({
                      suggestions: adaptSuggestions(result)
                  });
                },
                (error) => {
                  console.log('error')
              }
          )
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search the collection',
      value,
      onChange: this.onChange,
      onKeyPress: this.keyPressed
    };

    return (
      <div className="search">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <p className="sortby">
          <span 
            onClick={() => {this.changeSorting('date')}}
            class={this.state.sortBy === 'date' ? 'active' : ''}
            >recent
          </span> | <span 
          onClick={() => {this.changeSorting('popular')}}
          class={this.state.sortBy !== 'date' ? 'active' : ''}
          >popular
          </span>
        </p>
      </div>
    );
  }
}

export default Search;