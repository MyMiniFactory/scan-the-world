import './TopBar.scss'

import React, { Component } from 'react';

const MYMINIFACTORY_URL = "https://www.myminifactory.com";
const LOGO_URL = "https://www.myminifactory.com/images/logo_mobile.png";

const links = [
    {
        name: "About",
        url: "http://www.myminifactory.com/scantheworld/#"
    },
    {
        name: "Learn",
        url: "http://www.myminifactory.com/scantheworld/#"
    },
    {
        name: "Contribute",
        url: "http://www.myminifactory.com/scantheworld/#"
    }
]

class TopBar extends Component {
    
    renderLinks() {
        const renderedLinks = links.map((link, i) => {
            return (<li key={i} className="link-item" ><a href={link.url} >{link.name}</a></li>)
        })
        return renderedLinks;
    }
    
    render() {
        return (
            <div className="top-bar">
                <a href={MYMINIFACTORY_URL}><img className="logo" src={LOGO_URL} alt="MyMiniFactory Logo" /></a>
                <ul className="links" >
                    { this.renderLinks() }
                </ul>
            </div>);
    }
}

export default TopBar;