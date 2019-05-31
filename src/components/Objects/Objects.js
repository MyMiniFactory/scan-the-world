
import './Objects.scss'

import config from '../../config';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import ObjectTile from '../ObjectTile/ObjectTile'

class Objects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objects: props.objects ? props.objects : [],
            isLoaded: false,
            currentPage: 0,
            hasMore: true
        };
        this.getObjects = this.getObjects.bind(this)        
    }

    componentDidMount() {
        this.getObjects();
    }

    getObjects(page) {
        fetch(config.recent_objects_url + "&page=" + page)
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

        const tiles = this.state.objects.map((object, i) => {
            return(<ObjectTile 
                key={i}
                object={object}
            />)
        })

        if (this.state.objects.length === 0){
            return (<p>No objects found</p>);
        }

        return (
            <InfiniteScroll
                className="tiles"
                pageStart={0}
                loadMore={this.getObjects}
                hasMore={this.state.hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={true}
                threshold={400}
            >
            {tiles}
            </InfiniteScroll>
        );
    }

}

export default Objects;