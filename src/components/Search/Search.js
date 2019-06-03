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
      suggestions: []
    };
  }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.props.onSearch(this.state.value)
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