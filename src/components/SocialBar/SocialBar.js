import './SocialBar.scss'

import React, { Component } from 'react';
import config from '../../config';

class SocialBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            links: props.links ? props.links : config.social_links,
        };
    }

    renderLinks() {
        const renderedLinks = this.state.links.map((link, i) => {
            return (<li key={i} className="link-item" ><a href={link.url} >{link.name}</a></li>)
        })
        return renderedLinks;
    }
    
    render() {
        return (
            <div className="social-bar">
                <ul className="links" >
                    { this.renderLinks() }
                </ul>
            </div>
        );
    }
}

export default SocialBar;