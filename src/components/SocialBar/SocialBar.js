import './SocialBar.scss'

import React, { Component } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
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

            let icon = null;
            switch (link.name.toLowerCase()) {
                case 'twitter':
                    icon = <FaTwitter />;
                break;
                case 'medium':
                    icon = <FaMedium />;
                break;
                case 'instagram':
                    icon = <FaInstagram />;
                break;
                default:
                    icon = <FaTwitter />;
                break;
            }
            return (<a key={i} href={link.url}>{icon}</a>)
        })
        return renderedLinks;
    }

    render() {
        return (
            <div className="social-bar">
                <p className="social" >social</p>
                { this.renderLinks() }
            </div>
        );
    }
}

export default SocialBar;
