import './TopBar.scss'

import React, { Component } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'


const MYMINIFACTORY_URL = "https://www.myminifactory.com";
const LOGO_URL = "https://www.myminifactory.com/favicon.png";

class TopBar extends Component {
    
    renderLinks() {
        return (
        <StaticQuery
            query={graphql`
                query {
                    allMarkdownRemark {
                    totalCount
                    edges {
                        node {
                        id
                        frontmatter {
                            title
                            path
                        }
                        excerpt
                        }
                    }
                    }
                }
                `}
            render={data => {
                let links = [
                    <li key={0} className="link-item" ><a href={'/'} >Home</a></li>
                ];
                data.allMarkdownRemark.edges.map(({ node }, i) => {
                    return links.push(
                        <li key={i + 1} className="link-item" ><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></li>
                    )
                })
                return links;
            }}
        />)
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