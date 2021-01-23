import * as React from "react"
import HeaderLayout from "../components/layouts/headerLayout"
import Navigation from "../components/navbar"
import LatestPosts from "../components/latestPosts"
import AsideMenu from "../components/asideMenu"
import FavPhoto from "../components/favPhoto"
import { Container } from "react-bootstrap"

require ("../styles/global.css");
// styles
const pageStyles = {
  color: "#232129",
  padding: "30px",
  backgroundColor : "#f9fafb",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <main  style={pageStyles}>
      <HeaderLayout>
        <Navigation>  </Navigation>
      </HeaderLayout>
        <Container>
        <div className="row">
            <FavPhoto></FavPhoto>
            <AsideMenu ></AsideMenu>

            <br />
        </div>
        </Container>
        <div>Copyright ©<script>document.write(new Date().getFullYear());</script>2021 All rights reserved | Created by Michael Learo </div>

    </main>
  )
}

export default IndexPage
