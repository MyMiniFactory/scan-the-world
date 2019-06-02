import './Search.scss'

import React from 'react';
import Autosuggest from 'react-autosuggest';
import config from '../../config';

const adaptSuggestions = value => {
    return value.map(item =>
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
    <div className="text" >
        {suggestion.name}<br/>
        {suggestion.designer}
    </div>
    </a>
  </div>
);

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.props.onSearch(newValue);
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {

    // Disable until the API filters scan the world objects
      // fetch(config.suggester_url + "/" + value + "?cat=112")
      //     .then(res => res.json())
      //     .then(
      //         (result) => {
      //             this.setState({
      //                 suggestions: adaptSuggestions(result)
      //             });
      //           },
      //           (error) => {
      //             console.log('error')
      //         }
      //     )
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
      placeholder: 'Search for an object',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Search;