import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Autosuggest from 'react-autosuggest';

const config = {
  access_token: null,
  myminifactory_url: "https://www.myminifactory.com",
  logo_url: "https://www.myminifactory.com/images/logo_mobile.png",
  recent_objects_url: "https://www.myminifactory.com/api/v2/search?q=&cat=112&sort=date&per_page=16&light=1",
  suggester_url: "https://www.myminifactory.com/search/search-suggester",
  social_links: [{
    name: "Instagram",
    url: "https://www.instagram.com/scantheworld"
  }, {
    name: "Twitter",
    url: "https://twitter.com/Scan_The_World"
  }, {
    name: "Medium",
    url: "https://medium.com/scantheworld"
  }]
};

class ObjectTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: props.object ? props.object : {},
      isLoaded: false
    };
  }

  render() {
    return React.createElement("a", {
      className: "object-tile-a",
      href: this.state.object.url
    }, React.createElement("div", {
      className: "object-tile",
      style: {
        backgroundImage: `url(${this.state.object.images[0].thumbnail.url})`
      }
    }, React.createElement("div", {
      className: "info"
    }, React.createElement("p", null, this.state.object.name))));
  }

}

class Objects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: props.objects ? props.objects : [],
      isLoaded: false,
      currentPage: 0,
      hasMore: true
    };
    this.getObjects = this.getObjects.bind(this);
  }

  componentDidMount() {
    this.getObjects();
  }

  getObjects(page) {
    fetch(config.recent_objects_url + "&page=" + page).then(res => res.json()).then(result => {
      if (result.items) {
        this.setState({
          isLoaded: true,
          objects: this.state.objects.concat(result.items)
        });
      } else {
        this.setState({
          hasMore: false
        });
      }
    }, error => {
      this.setState({
        hasMore: false,
        isLoaded: true,
        error
      });
    });
  }

  render() {
    const tiles = this.state.objects.map((object, i) => {
      return React.createElement(ObjectTile, {
        key: i,
        object: object
      });
    });

    if (this.state.objects.length === 0) {
      return React.createElement("p", null, "No objects found");
    }

    return React.createElement(InfiniteScroll, {
      className: "tiles",
      pageStart: 0,
      loadMore: this.getObjects,
      hasMore: this.state.hasMore,
      loader: React.createElement("div", {
        className: "loader",
        key: 0
      }, "Loading ..."),
      useWindow: true,
      threshold: 400
    }, tiles);
  }

}

const MYMINIFACTORY_URL = "https://www.myminifactory.com";
const LOGO_URL = "https://www.myminifactory.com/images/logo_mobile.png";
const links = [{
  name: "About",
  url: "http://www.myminifactory.com/scantheworld/#"
}, {
  name: "Learn",
  url: "http://www.myminifactory.com/scantheworld/#"
}, {
  name: "Contribute",
  url: "http://www.myminifactory.com/scantheworld/#"
}];

class TopBar extends Component {
  renderLinks() {
    const renderedLinks = links.map((link, i) => {
      return React.createElement("li", {
        key: i,
        className: "link-item"
      }, React.createElement("a", {
        href: link.url
      }, link.name));
    });
    return renderedLinks;
  }

  render() {
    return React.createElement("div", {
      className: "top-bar"
    }, React.createElement("a", {
      href: MYMINIFACTORY_URL
    }, React.createElement("img", {
      className: "logo",
      src: LOGO_URL,
      alt: "MyMiniFactory Logo"
    })), React.createElement("ul", {
      className: "links"
    }, this.renderLinks()));
  }

}

class SocialBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.links ? props.links : config.social_links
    };
  }

  renderLinks() {
    const renderedLinks = this.state.links.map((link, i) => {
      return React.createElement("li", {
        key: i,
        className: "link-item"
      }, React.createElement("a", {
        href: link.url
      }, link.name));
    });
    return renderedLinks;
  }

  render() {
    return React.createElement("div", {
      className: "social-bar"
    }, React.createElement("ul", {
      className: "links"
    }, this.renderLinks()));
  }

}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const adaptSuggestions = value => {
  return value.map(item => ({
    name: item[1],
    image: item[2],
    designer: item[3],
    url: item[4]
  }));
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => React.createElement("div", {
  className: "search-suggestion"
}, React.createElement("a", {
  href: suggestion.url
}, React.createElement("img", {
  className: "image",
  alt: "suggested object",
  src: suggestion.image
}), React.createElement("div", {
  className: "text"
}, suggestion.name, React.createElement("br", null), suggestion.designer)));

class Search extends React.Component {
  constructor() {
    super();

    _defineProperty(this, "onChange", (event, {
      newValue
    }) => {
      this.setState({
        value: newValue
      });
    });

    _defineProperty(this, "onSuggestionsFetchRequested", ({
      value
    }) => {
      fetch(config.suggester_url + "/" + value + "?cat=112").then(res => res.json()).then(result => {
        this.setState({
          suggestions: adaptSuggestions(result)
        });
      }, error => {
        console.log('error');
      });
    });

    _defineProperty(this, "onSuggestionsClearRequested", () => {
      this.setState({
        suggestions: []
      });
    });

    this.state = {
      value: '',
      suggestions: []
    };
  }

  render() {
    const {
      value,
      suggestions
    } = this.state; // Autosuggest will pass through all these props to the input.

    const inputProps = {
      placeholder: 'Search for an object',
      value,
      onChange: this.onChange
    };
    return React.createElement(Autosuggest, {
      suggestions: suggestions,
      onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.onSuggestionsClearRequested,
      getSuggestionValue: getSuggestionValue,
      renderSuggestion: renderSuggestion,
      inputProps: inputProps
    });
  }

}

function App() {
  return React.createElement(React.Fragment, null, React.createElement(TopBar, null), React.createElement(SocialBar, null), React.createElement("div", {
    className: "scan-the-world"
  }, React.createElement("div", {
    className: "intro"
  }, React.createElement("h1", null, React.createElement("b", null, "scan"), " the ", React.createElement("i", null, "world")), React.createElement("p", null, "Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.")), React.createElement(Search, null), React.createElement(Objects, null)));
}

export default App;
