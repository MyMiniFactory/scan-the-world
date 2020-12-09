import React from "react"
import Img from "gatsby-image"
import InfiniteScroll from "react-infinite-scroller"
import ContentLoader from "react-content-loader"
import ObjectTile from "./object-tile"
import config from "../config"
import "./scss/objects.scss"

const skeleton = () => {
    const blocks = Array.from({ length: 6 }, (x, i) => (
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

const PlusButton = ({childImageSharp}) => (
  <div className="object-tile">
    <a href={config.contributionUrl} target='_blank' rel="noopener noreferrer">
      <Img className="tile-image" fluid={childImageSharp.fluid} />
      <p>Upload a scan!</p>
    </a>
  </div>
)

class Objects extends React.Component {

    constructor(props) {
        super(props);
        const page = props.objects.length? 1:0
        this.state = {
            objects: props.objects,
            isLoaded: false,
            currentPage: page,
            hasMore: true,
            query: props.query,
            sortBy: props.sortBy
        };
        this.getObjects = this.getObjects.bind(this)
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.query !== prevProps.query || this.props.sortBy !== prevProps.sortBy) {
          this.setState({
              currentPage: 0,
              objects: [],
              query: this.props.query,
              sortBy: this.props.sortBy,
              isLoaded: false,
              hasMore: true,
          })
        }
    }

    getObjects() {
      const fetchedPage = this.state.currentPage + 1
      const perPage = fetchedPage === 1 ? 14 : 15
      fetch(`${config.objects_url}?${this.state.query}&page=${fetchedPage}&sort=${this.state.sortBy}&per_page=${perPage}`)
          .then(res => res.json())
          .then(
              (result) => {
                  if (result.items.length){
                      this.setState({
                        isLoaded: true,
                        objects: this.state.objects.concat(result.items),
                        currentPage: fetchedPage,
                      })
                  } else {
                      this.setState({
                          hasMore: false,
                      })
                  }
              },
              (error) => {
                  this.setState({
                      hasMore: false,
                      isLoaded: true,
                      error,
                  });
              }
          )
    }

    render() {

        if (this.state.isLoaded && this.state.objects.length === 0){
          return (<p style={{marginLeft:`260px`}}>No objects found :(<br/>Try reloading the page</p>);
        }

        const tiles = this.state.objects.map((object, i) => {
          if (i === 1) {
            return [<PlusButton key={0} childImageSharp={this.props.childImageSharp} />, <ObjectTile key={object.id} object={object} />]
          }
          return (
            <ObjectTile key={object.id} object={object} />
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
