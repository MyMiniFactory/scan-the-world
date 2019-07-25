import './Search.scss'

import React from 'react';
import Autosuggest from 'react-autosuggest';
import {FaSearch} from 'react-icons/fa';
import config from '../../config';

const adaptSuggestions = ({items}) => {
  return items.slice(0, 4).map(item => ({name: item[1], image: item[2], designer: item[3], url: item[4]}));
}

const getSuggestionValue = suggestion => suggestion.name

function renderSuggestion(suggestion) {
  return (<a className="url-suggestion" href={suggestion.url}>
    <div className="search-suggestion">
      <img alt="suggested object" src={suggestion.image}/>
      <div className="text" title={suggestion.name}>
        <p>{suggestion.name}</p>
        <p className="author">{suggestion.designer}</p>
      </div>
    </div>
  </a>);
}

const renderInput = (inputProps) => {
  const {
    submit,
    clear,
    ...inputs
  } = inputProps;
  return (
    <form onSubmit={submit}>
      <button type='submit'><FaSearch/></button>
      <input {...inputs}/>
      {inputs.value.length > 0 &&
        <button onClick={clear}>X</button>
      }
    </form>)
}

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      sortBy: 'popularity',
      suggestions: []
    };
    this.onChange = this.onChange.bind(this)
    this.changeSorting = this.changeSorting.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearValue = this.clearValue.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  onChange(event, {newValue}) {
    this.setState({value: newValue})
  }

  changeSorting(sortBy) {
    this.setState({sortBy: sortBy})
    this.props.onSearch(this.state.value, sortBy)
  }

  handleSubmit(event) {
    this.setState({sortBy: 'popularity'})
    this.props.onSearch(this.state.value, 'popularity')
    event.preventDefault()
  }

  clearValue() {
    this.setState({value: ''})
    this.props.onSearch(this.state.value, 'popularity')
  }

  onSuggestionsFetchRequested = ({value}) => {
    fetch(`${config.suggester_url}/${value}?cat=112`).then(res => res.json()).then(result => {
      this.setState({suggestions: adaptSuggestions(result)});
    }, error => console.log(error))
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => this.setState({suggestions: []});

  render() {
    const {value, suggestions} = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search the collection',
      value,
      clear: this.clearValue,
      onChange: this.onChange,
      submit: this.handleSubmit
    }

    return (<div className="search">
      <p className="sortby">
        <span onClick={() => this.changeSorting('date')} className={this.state.sortBy === 'date'
          ? 'active'
          : ''}>recent
        </span>
        <span style={{margin:`0 5px 0 5px`}}>|</span>
        <span onClick={() => {
          this.changeSorting('popularity')
        }} className={this.state.sortBy !== 'date'
          ? 'active'
          : ''}>
          popular
        </span>
      </p>
      <Autosuggest suggestions={suggestions} onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} onSuggestionsClearRequested={this.onSuggestionsClearRequested} getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion} inputProps={inputProps} renderInputComponent={renderInput}/>
    </div>);
  }
}

export default Search;
