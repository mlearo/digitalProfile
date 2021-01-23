import * as React from "react"


const PhotoContainer = (props) => {

    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xlg-4 aos-init aos-animate"  data-aos="fade-up" data-aos-delay={200}>
            <a href={props.href} className="d-block">
                <picture>
                    <source srcSet={("/800x600-" + props.src).toLowerCase()}  media="(min-width: 600px)"></source>
                    <source srcSet={("/378x340-" + props.src).toLowerCase()}  media="(max-width: 599px)"></source>

                <img height="auto" maxWidth="100%" src={("/378x340-" + props.src).toLowerCase()} alt="Image" className="img-fluid rounded" />
                <div className="photo-text-more">
                    <div className="photo-text-more">
                        <br />
                        <span className="meta"></span>
                    </div>
                </div>
                </picture>
            </a>
        </div>
    )
}

export default PhotoContainer;

