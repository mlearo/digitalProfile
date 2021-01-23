import * as React from "react"
import { Link } from "gatsby";
import { Row, Container } from "react-bootstrap"
import BlogPost from "./blogPost"

const latestPostsStyle = {
  marginTop : "20px"
}  

const Posts = []
class LatestPosts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      
        <div style={latestPostsStyle} className="col-md-8">
          <h3 className="pb-4 mb-4 font-italic border-bottom">
            Latest Posts
      </h3>

        {Posts.map((p) => {
          return(
            <BlogPost props={p}></BlogPost>
          )
        })}

          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary" href="#">Older</a>
            <a className="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
          </nav>

        </div>

       

    )
  }
}

export default LatestPosts;