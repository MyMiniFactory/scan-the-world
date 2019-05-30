
import './Objects.scss'

import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import ObjectTile from '../ObjectTile/ObjectTile'

const RECENT_OBJECTS_URL = "https://www.myminifactory.com/api/v2/search?q=&cat=112&sort=date&per_page=16&light=1"

class Objects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objects: props.objects ? props.objects : [],
            isLoaded: false,
            currentPage: 0
        };
        this.getObjects = this.getObjects.bind(this)        
    }

    componentDidMount() {
        this.getObjects();
    }

    getObjects(page) {
        fetch(RECENT_OBJECTS_URL + "&page=" + page)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.items){
                        this.setState({
                            isLoaded: true,
                            objects: this.state.objects.concat(result.items)
                        });
                    }
                },
                (error) => {
                    this.setState({
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

        return (
            <InfiniteScroll
                className="tiles"
                pageStart={0}
                loadMore={this.getObjects}
                hasMore={true}
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