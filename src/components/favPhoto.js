import * as React from "react"
import { Link } from "gatsby";
import { Row, Container } from "react-bootstrap"
const favPhotoStyle = {
    marginTop : "20px"
}
const photoText = {
    fontSize : "small"
}
const favPhoto = () => {

    return (
        <div style={favPhotoStyle} className="col-md-8">
        <Row>
        <img className="img-fluid" src="/1080x720-dsc00452.jpg"></img>
        <p style={photoText} >Nezu Museum. Tokyo, Japan. Oct 2019</p>
        </Row>
        </div>
         )
}

export default favPhoto;
//616x410-DSC00452.JPG