
import './Objects.scss'

import config from '../../config';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ContentLoader from "react-content-loader"

import ObjectTile from '../ObjectTile/ObjectTile'

class Objects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objects: props.objects ? props.objects : [],
            isLoaded: false,
            currentPage: 0,
            hasMore: true,
            query: props.query ? props.query : ''
        };
        this.getObjects = this.getObjects.bind(this)        
    }

    componentDidMount() {
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.query !== prevProps.query) {
            this.setState({
                currentPage: 0,
                query: this.props.query,
                objects: [],
                isLoaded: false
            })
            this.getObjects(0);
        }
    }

    getObjects(page) {
        fetch(config.recent_objects_url + "&page=" + page + "&q=" + this.state.query)
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

    renderSkeleton() {
        const blocks = Array.from({ length: 16 }, (x, i) => (
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
        <div className="loader" >
            {blocks}
        </div>)
    }

    render() {

        const tiles = this.state.objects.map((object, i) => {
            return(<ObjectTile 
                key={i}
                object={object}
            />)
        })

        if (this.state.isLoaded && this.state.objects.length === 0){
            return (<p>No objects found :(<br/>Try reloading the page</p>);
        }

        return (
            <InfiniteScroll
                className="tiles"
                pageStart={0}
                loadMore={this.getObjects}
                hasMore={this.state.hasMore}
                loader={this.renderSkeleton()}
                useWindow={true}
                threshold={400}
            >
            {tiles}
            </InfiniteScroll>
        );
    }

}

export default Objects;