import React from 'react';
import Autosuggest from 'react-autosuggest';
import config from '../../config';
import './Search.scss'
import searchIcon from '../../images/search.svg'

const _getSuggestions = (objects, value) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length
  return inputLength === 0 ? [] : objects.filter(item =>
    item.name.toLowerCase().includes(inputValue)
  ).slice(0, 5)
}

const adaptSuggestions = ({items}) => {
  return items.slice(0, 4).map(item => (
    {
      name: item.title,
      image: item.threedObject.images[0].thumbnail.url,
      designer: item.threedObject.designer.username,
      url: item.threedObject.url,
    }
  ))
}

const getSuggestionValue = suggestion => suggestion.name

function renderObjectSuggestion(suggestion) {
  return (
    <a className="url-suggestion" href={suggestion.url}>
      <div className="search-suggestion">
        <img alt="suggested object" src={suggestion.image}/>
        <div className="text" title={suggestion.name}>
          <p>{suggestion.name}</p>
          <p className="author">{suggestion.designer}</p>
        </div>
      </div>
    </a>);
}

function renderSuggestion(suggestion) {
  return (
    <div className="search-table">
      <p>{suggestion.name}</p>
    </div>)
}

const renderInput = (inputProps) => {
  const { clear, ...inputs } = inputProps
  return (
    <>
      <input {...inputs}/>
      {inputs.value.length > 0 &&
        <span onClick={clear}>X</span>
      }
    </>)
}

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      object: '',
      artist: '',
      artists: [],
      place: '',
      places: [],
      sortBy: props.sortBy,
      objectSuggestions: [],
      artistSuggestions: [],
      placeSuggestions: [],
    };
    this.handleChange = this.handleChange.bind(this)
    this.changeSorting = this.changeSorting.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchOnChange = this.searchOnChange.bind(this)
    this.onObjectSuggestionsFetchRequested = this.onObjectSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  componentDidUpdate(prevProps) {
      if (this.props.sortBy !== prevProps.sortBy) {
        this.setState({sortBy: this.props.sortBy})
      }
  }

  componentDidMount() {
    fetch('https://www.myminifactory.com/stw/objects/filter-artist')
    .then(res => res.json())
    .then(
      result => this.setState({ artists: result.objects })
    )
    fetch('https://www.myminifactory.com/stw/objects/filter-place')
    .then(res => res.json())
    .then(
      result => this.setState({ places: result.objects })
    )
  }

  handleChange(event, { newValue }) {
    const { target } = event
    this.setState({
      [target.name]: newValue
    })
  }

  changeSorting(sortBy) {
    const { object, artist, place } = this.state
    this.setState({sortBy: sortBy})
    this.props.onSearch(`query=${object}&artist=${artist}&place=${place}`, sortBy)
  }

  handleSubmit(event) {
    const { object, artist, place } = this.state
    const sortBy = this.state.sortBy === 'random'? '':this.state.sortBy
    this.setState({sortBy})
    this.props.onSearch(`query=${object}&artist=${artist}&place=${place}`, sortBy)
    event.preventDefault()
  }

  searchOnChange(name, value, doSearch) {
    const { object, artist, place } = this.state
    const sortBy = this.state.sortBy === 'random'? '':this.state.sortBy
    const state = {object, artist, place, sortBy}
    state[name] = value
    this.setState(state)
    if (doSearch) {
      this.props.onSearch(`query=${state.object}&artist=${state.artist}&place=${state.place}`, sortBy)
    }
  }

  onObjectSuggestionsFetchRequested = (data, suggestions, value) => {
    if (data) {
      return this.setState({[suggestions]: _getSuggestions(data, value)})
    }
    const { artist, place } = this.state
    fetch(`${config.objects_url}?query=${value}&artist=${artist}&place=${place}&per_page=4`)
    .then(res => res.json())
    .then(
      result => this.setState({[suggestions]: adaptSuggestions(result)}),
      error => console.log(error))
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = suggestions => this.setState({[suggestions]: []});

  inputProps = (placeholder, value, name) => {
    return {
      className: 'stw-input-search',
      placeholder: placeholder,
      value,
      name: name,
      clear: () => this.searchOnChange(name, '', true),
      onChange: this.handleChange,
    }
  }

  render() {
    const {object, artist, place, objectSuggestions, artistSuggestions, placeSuggestions} = this.state;
    return (<div className="search">
      <p className="sortby">
        <span
          onClick={() => this.changeSorting('date')}
          className={this.state.sortBy === 'date'?'active':''}
        >
          recent
        </span>
        <span style={{margin:`0 5px 0 5px`}}>|</span>
        <span
          onClick={() => this.changeSorting('')}
          className={this.state.sortBy === ''?'active':''}
        >
          popular
        </span>
        <span style={{margin:`0 5px 0 5px`}}>|</span>
        <span
          onClick={() => this.changeSorting('random')}
          className={this.state.sortBy === 'random'?'active':''}
        >
          random
        </span>
      </p>
      <form className="stw-search-form" onSubmit={this.handleSubmit}>
        <Autosuggest
          suggestions={objectSuggestions}
          onSuggestionsFetchRequested={({ value }) => this.onObjectSuggestionsFetchRequested(null, 'objectSuggestions', value)}
          onSuggestionsClearRequested={() => this.onSuggestionsClearRequested('objectSuggestions')}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderObjectSuggestion}
          inputProps={this.inputProps('search the collection...', object, 'object')}
          renderInputComponent={renderInput}
        />
        <Autosuggest
          suggestions={artistSuggestions}
          onSuggestionsFetchRequested={
            ({value}) => this.onObjectSuggestionsFetchRequested(this.state.artists, 'artistSuggestions', value)}
          onSuggestionsClearRequested={() => this.onSuggestionsClearRequested('artistSuggestions')}
          onSuggestionSelected={(event, { suggestionValue }) => this.searchOnChange('artist', suggestionValue, false)}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={this.inputProps('search by artist...', artist, 'artist')}
          renderInputComponent={renderInput}
        />
        <Autosuggest
          suggestions={placeSuggestions}
          onSuggestionsFetchRequested={
            ({value}) => this.onObjectSuggestionsFetchRequested(this.state.places, 'placeSuggestions', value)}
          onSuggestionsClearRequested={() => this.onSuggestionsClearRequested('placeSuggestions')}
          onSuggestionSelected={(event, { suggestionValue }) => this.searchOnChange('place', suggestionValue, false)}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={this.inputProps('search by place...', place, 'place')}
          renderInputComponent={renderInput}
        />
        <button className="stw-search-button" type='submit'><img src={searchIcon} alt='search' style={{marginRight:`5px`, width:`15px`}}/>submit</button>
      </form>
    </div>);
  }
}

export default Search;
