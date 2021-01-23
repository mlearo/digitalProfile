const React = require("react")
//import { oneLine, stripIndent } from "common-tags"

const HtmlAttributes = {
    lang: "en"
}

const HeadComponents = [
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous" />,
    <script key="my-script" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" />,
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />,
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />,
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>,

]

const BodyAttributes = {

}
const generateDefaultDataLayer = (dataLayer, reporter, dataLayerName, pathname) => {
    let result = `window.${dataLayerName} = `; //= window.${dataLayerName} || {};`
    let utag_data = {};

    if(pathname === "/"){
        utag_data['page_name'] = "home"
    }
    if(pathname === "coding"){
        utag_data['page_name'] = "coding"
    }
    return result += JSON.stringify(utag_data)
  }
 

exports.onRenderBody = ({
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPostBodyComponents,
    pathname

}, pluginOptions) => {
    let r = generateDefaultDataLayer({type: 'object'},null,"utag_data", pathname)
    HeadComponents.push(<script dangerouslySetInnerHTML={{__html : `${r}` }} />)
 

    setHtmlAttributes(HtmlAttributes)
    setHeadComponents(HeadComponents)
    setBodyAttributes(BodyAttributes)
    setPostBodyComponents([
        <script dangerouslySetInnerHTML={{__html : `setTimeout(function(){ AOS.init()},500)` }}/>
    ])
}


