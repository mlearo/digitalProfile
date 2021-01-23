import React from "react"
import HeaderLayout from "../components/layouts/headerLayout"
import Navigation from "../components/navbar"
import Image from 'gatsby-image'


const pageStyles = {
    color: "#232129",
    backgroundColor : "#f9fafb",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

  
const PhotoLrg = ({ pageContext }) => {
    let photo = JSON.parse(pageContext.photo)
    console.log("PHOTO LRG : ", photo)
    return( 
    <main  style={pageStyles}>
        <HeaderLayout>
          <Navigation>  </Navigation>
        </HeaderLayout>
        <div style={{ backgroundColor: "black", padding: "50px" }} className="container-fluid">
            <div className="row" style={{align : "center"}}>
            <picture>
                <source srcset={"/1080x720-" +`${photo.src.toLowerCase()}`} media="(min-width: 800px)"></source> 
                <source srcset={"/800x600-" +`${photo.src.toLowerCase()}`} media="(max-width: 500px)"></source>
                <img className="img-fluid" alt={photo.alt} src={"/1080x720-" +`${photo.src.toLowerCase()}`}></img>
            </picture>
            </div>
        </div>
        </main>
    )
}


export default PhotoLrg;
//"/" +`${photo.src}`