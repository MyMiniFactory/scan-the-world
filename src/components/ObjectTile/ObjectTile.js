
import './ObjectTile.scss'

import React from 'react';

class ObjectTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            object: props.object ? props.object : {},
            isLoaded: false
        };
    }

    render() {
        return (
            <a className="object-tile-a" href={this.state.object.url} >
                <div className="object-tile" style={{backgroundImage: `url(${this.state.object.images[0].thumbnail.url})`}}>
                    <div className="info">
                        <p>{this.state.object.name}</p>
                    </div>
                </div>
            </a>
        );
    }

}

export default ObjectTile;