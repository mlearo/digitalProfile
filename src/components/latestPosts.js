import * as React from "react"
import { Link } from "gatsby";
import { Row, Container } from "react-bootstrap"
import BlogPost from "./blogPost"

const latestPostsStyle = {
  marginTop : "20px"
}  
const OriginalPosts = [

  {
    title: "Minimizing vendor library impact on UX",
    author: "Michael Learo",
    datePublished: "Coming soon",
    subTitle : "",
    meta: "",
    contentLocation: "Piggy Backing, Caching, EdgeNetworks, H2 protocol",
    content: ["Opening, what the post will cover", "Low hanging fruit: only include what is needed, use H2, EdgeNetwork", "",""]
  },
  {
    title : "Building this site",
    subTitle : "Coming soon",
    author : "Michael Learo",
    datePublished : "",
    meta : "",
    content : []

  },
  {
    title : "Jump Around, Jump Around (Javascript Trampolining)",
    subTitle : "Coming soon",
    author : "Michael Learo",
    datePublished : "",
    meta : "",
    content : []

  },
  {
    title : "The downfall of choosing cheap over choice",
    subTitle : "Coming soon",
    author : "Michael Learo",
    datePublished : "",
    meta : "",
    content : []

  },
  {
    title : "How I built this site",
    subTitle : "Coming soon",
    author : "Michael Learo",
    datePublished : "",
    meta : "",
    content : ["I didn't care to build a digital profile. Why? I was unmotivated because cobbling together a bootstrap template, or tossing some html/css together and uploading to S3 is too easy.", 
              "To get excited about this project I decided to make it a problem solving exercise. How do I build an extensible, maintainable, performant site with a tech that I understand little to nothing? GatsbyJS popped up in a search and I had never heard of it so I did some research and went with it.",
              "I started by determining what content I wanted, going with generic blog and adding in some travel photos and opinions on a few books I have read(listened to).",
              "Next I created a schema of content in JSON and populated it with content I expected to use in my site. This is something I do in general when starting a project. This helps me get to the meta by imagining the code and UI as I fill in the schema.",
              ""
            ]

  },
  {
    title: "Record them all.",
    subTitle : "Coming soon",
    author : "Michael Learo",
    datePublished : "",
    meta : "",
    content : ["Your pavlov's dog response to purchasing through targeted marketing, aka personalization, and how we got there.","They know when you sleep(you and your family and friends), eat, shop (and what for), have sex, and many other behaviors. How? ",
    "Well, I would say we are partially to blame, with our insatiable need for the new and convienient.","Record them all. Every piece of technology you use is taking notes on you. It knows your unique ID, location, behaviors, habits.", "Think I'm wrong? I will tell you exactly how this happens."]
  }
]


let mythsOfTheRichAndPowerful = [
  {
    "": "Socialized Healthcare for all is negative because it will rob people of choice. ",
    "": "The war on drugs was about drugs. The war on drugs was about mass encarciration of individuals of color.",
    "": "The idea that you need to constantly disinfect everything you own with a germ killing spray. Prey on individuals fear, this is a marketing technique",
    "": ""
  }

]
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