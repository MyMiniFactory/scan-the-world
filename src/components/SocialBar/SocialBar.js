import './SocialBar.scss'

import React, { Component } from 'react';

const MYMINIFACTORY_URL = "https://www.myminifactory.com";
const LOGO_URL = "https://www.myminifactory.com/images/logo_mobile.png";

const links = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/scantheworld"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/Scan_The_World"
    },
    {
        name: "Medium",
        url: "https://medium.com/scantheworld"
    }
]

class SocialBar extends Component {
    
    renderLinks() {
        const renderedLinks = links.map((link, i) => {
            return (<li className="link-item" ><a key={i} href={link.url} >{link.name}</a></li>)
        })
        return renderedLinks;
    }
    
    render() {
        return (
            <div className="social-bar">
                <ul className="links" >
                    { this.renderLinks() }
                </ul>
            </div>);
    }
}

export default SocialBar;