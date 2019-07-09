import './Objects.css'

import config from '../../config';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ContentLoader from "react-content-loader"

import ObjectTile from '../ObjectTile/ObjectTile';

const skeleton = () => {
    const blocks = Array.from({ length: 12 }, (x, i) => (
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

const plusButton = {
  url: "https://www.myminifactory.com",
  name: "Contribute now",
  images: [
    {
      thumbnail:
      {
        url:"/assets/plus.png"
      }
    }
  ]
}

class Objects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objects: props.objects ? props.objects : [],
            isLoaded: false,
            currentPage: 0,
            hasMore: true,
            query: props.query ? props.query : '',
            sortBy: props.sortBy ? props.sortBy : 'date'
        };
        this.getObjects = this.getObjects.bind(this)
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.query !== prevProps.query || this.props.sortBy !== prevProps.sortBy) {
            this.setState({
                currentPage: 0,
                query: this.props.query,
                sortBy: this.props.sortBy ? this.props.sortBy : 'popularity',
                objects: [],
                isLoaded: false
            },
            () => this.getObjects()
          )
        }
    }

    getObjects(page = 0) {
        fetch(config.objects_url + "&page=" + page + "&q=" + this.state.query + '&sort=' + this.state.sortBy)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.items){
                        this.setState({
                            isLoaded: true,
                            objects: this.state.objects.concat(result.items)
                        });
                    } else {
                        this.setState({
                            hasMore: false,
                        });
                    }
                },
                (error) => {
                    this.setState({
                        hasMore: false,
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        if (this.state.isLoaded && this.state.objects.length === 0){
          return (<p>No objects found :(<br/>Try reloading the page</p>);
        }

        const tiles = this.state.objects.flatMap((object, i) => {
          if (i === 1) {
            return [<ObjectTile key={0} object={plusButton} />, <ObjectTile key={i+1} object={object} />]
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
