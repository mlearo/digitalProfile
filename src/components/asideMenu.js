import * as React from "react"

const asideStyle = {
    marginTop : "0px"
}
const photoText = {
    fontSize : "10px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif"

}

const asideMenu = () => {

    return (
        <div style={asideStyle} className="col-md-4">
        <div className="p-4 mb-3 bg-light rounded">
          <h4 className="font-italic"></h4>
            <div className="card">
              <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src="/378x340-me-arribada.jpg"></img>
              <p style={photoText} >Arribada</p>
              <div className="card-body">
                <h5 className="card-title">Michael Learo</h5>
                <p style={{fontSize: "14px"}}className="card-text">Hi and thanks for checking out my digital profile. I am a Strategic Operations Engineer from San Diego that enjoys learning, teaching, golfing, and gardening. </p>
              </div>
          </div>
        </div>

                <div className="p-4">
          <h4 className="font-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
          
          </ol>
        </div>

        <div className="p-4">
          <h4 className="font-italic">Stuff</h4>
          <ol className="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ol>
        </div>
      </div>    )
}

export default asideMenu;