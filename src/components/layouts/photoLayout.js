
import * as React from "react"

export default function photoLayout({children}) {

    return (
        <div className="col-4 col-md-4 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay={props.d}>
            <a href="single.html" className="d-block">
               {children}
            </a>
        </div>
    )
}

