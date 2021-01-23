import * as React from "react"
import HeaderLayout from "../components/layouts/headerLayout"
import Navigation from "../components/navbar"


// styles

const pageStyles = {
  color: "#232129",
  padding: "30px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
/*
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}
*/


// markup
const CodingPage = () => {
  return (
    <main style={pageStyles}>
      <HeaderLayout>
        <Navigation>  </Navigation>
      </HeaderLayout>
      <title>Coding Page</title>
      
    </main>
  )
}

export default CodingPage
