import './Objects.css'

import config from '../../config';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ContentLoader from "react-content-loader"

import ObjectTile from '../ObjectTile/ObjectTile';

const skeleton = () => {
    const blocks = Array.from({ length: 2 }, (x, i) => (
        <ContentLoader
          key={i}
          height={230}
          width={230}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="0" y="0" rx="5" ry="5" width="230" height="230" />
        </ContentLoader>
    ));

    return (
    <div className="loader" key={0} >
        {blocks}
    </div>)
}

function plusButton(url) {
  return {
    url: "https://www.myminifactory.com/upload/object?type=scantheworld",
    name: "Contribute now",
    images: [
      {
        thumbnail:
        {
          url:url
        }
      }
    ]
  }
}

class Objects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objects: props.objects,
            isLoaded: true,
            currentPage: 1,
            hasMore: true,
            query: props.query,
            sortBy: props.sortBy
        };
        this.getObjects = this.getObjects.bind(this)
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.query !== prevProps.query || this.props.sortBy !== prevProps.sortBy) {
            this.setState({
                currentPage: 0,
                objects: [],
                query: this.props.query,
                sortBy: this.props.sortBy,
                isLoaded: false
            })
        }
    }

    getObjects() {
      const fetchedPage = this.state.currentPage + 1
      fetch(`${config.objects_url}&page=${fetchedPage}&q=${this.state.query}&sort=${this.state.sortBy}`)
          .then(res => res.json())
          .then(
              (result) => {
                  if (result.items){
                      this.setState({
                        isLoaded: true,
                        objects: this.state.objects.concat(result.items),
                        currentPage: fetchedPage,
                      })
                  } else {
                      this.setState({
                          hasMore: false,
                      })
                  }
              },
              (error) => {
                  this.setState({
                      hasMore: false,
                      isLoaded: true,
                      error,
                  });
              }
          )
    }

    render() {

        if (this.state.isLoaded && this.state.objects.length === 0){
          return (<p>No objects found :(<br/>Try reloading the page</p>);
        }

        const tiles = this.state.objects.map((object, i) => {
          if (i === 1) {
            return [<ObjectTile key={0} object={plusButton(this.props.url)} />, <ObjectTile key={i+1} object={object} />]
          }
          return (
            <ObjectTile key={i+1} object={object} />
          )
        })

        return (
            <InfiniteScroll
                className="tiles"
                pageStart={0}
                loadMore={this.getObjects}
                hasMore={this.state.hasMore}
                loader={skeleton()}
                useWindow={true}
                threshold={400}
            >
            {tiles}
            </InfiniteScroll>
        );
    }

}

export default Objects;
