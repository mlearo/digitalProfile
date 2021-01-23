import * as React from "react"
import HeaderLayout from "../components/layouts/headerLayout"
import Navigation from "../components/navbar"
import PhotoContainer from "../components/photo"
import PhotosLayout from "../components/layouts/photosLayout"


const PhotosPage = ({ pageContext }) => {
    let photos = JSON.parse(pageContext.photos);
    console.log("PHOTOS : ",photos)
    return (
        <main >
            <HeaderLayout>
                <Navigation>  </Navigation>
            </HeaderLayout>
            <PhotosLayout>
                {photos.map((q, i) => {
                    return (<PhotoContainer href={`/img/${q.src}`} alt={`${q.alt}`} src={`${q.src}`} title={`${q.title}`} ></PhotoContainer>)
                })}
            </PhotosLayout>
        </main>
    )

}

export default PhotosPage;