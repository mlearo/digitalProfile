import React from "react"

export default function photosLayout({ children }) {
    return (
        <div style={{ backgroundColor: "black", paddingTop: "50px", paddingLeft: "3%", paddingRight : "3%" }} className="container-fluid">
            <div className="row">
                {children}
            </div>
        </div>
    )
}